let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let request = require('request');
let logger = require('morgan');
let multer = require('multer');
let fs = require('fs');
const Storage = require('@google-cloud/storage');
const projectId = 'yuag-public-art';
const storage = new Storage({
  projectId: projectId,
  keyFilename: 'XXXXX'
});
const bucket = storage.bucket('yuag-public-art');
let upload = multer();
const fileUpload = require('express-fileupload');
const pg = require('pg');


// begin database logic
const pool = new pg.Pool({
    user: 'XXXXX',
    host: 'XXXXX',
    database: 'XXXXX',
    password: process.env.PASS || 'XXXXX',
    port: 5432,
    max: 10,
    ssl: true  // max number of clients in the connection pool
});

// test fn - describe the art_details table
async function db_test() {
    try {
        const response = await pool.query(`
            SELECT COLUMN_NAME, data_type
            FROM information_schema.COLUMNS
            WHERE TABLE_NAME = 'art_details'
        `);
        console.log(JSON.stringify(response.rows));
    } catch (err) {
        console.log('error: ' + err)
    }
}

// ONLY FOR DEBUGGING (of course) - deletes the art detail table.
async function delete_art_table() {
    try {
        await pool.query(`DROP TABLE IF EXISTS public.art_details`);
        console.log('drop table if exists art_details OK')
    } catch (err) {
        console.log('err in drop table ' + err)
    }
}

init_tables();

async function init_tables() {
    // creates the tables if it doesn't already exist.
    // REQUIRES THE POSTGRES USER ('postgres') AND DB ('public') TO ALREADY EXIST

    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS public.art_details (
            primary_key serial PRIMARY KEY,
            subject text NULL,
            time_added timestamp NULL,
            surveyor text NULL,
            location text NULL,
            medium text NULL,
            art_type text NULL,
            colors text NULL,
            creation_year int4 NULL,
            img_links text NULL,
            artist text NULL,
            dimensions text NULL,
            is_indoors bool NULL,
            is_movable bool NULL,
            owner text NULL,
            src text NULL,
            value numeric NULL,
            restrictions text NULL,
            work_condition text NULL,
            yuag_id text NULL,
            note text NULL
        )`);
        console.log('make art_details if not exists OK');
        await pool.query(
            `CREATE TABLE IF NOT EXISTS public.user_db (
            primary_key int4 NOT NULL,
            email text NULL,
            password text NULL,
            user_rights int4 NULL,
            time_created text NULL,
            CONSTRAINT user_db_pkey PRIMARY KEY (primary_key)
        )`);
        console.log('make user_db if not exists OK')
    } catch (err) {
        console.log('err in db init: ' + err)
    }
}

async function rebuild() {  // destroys and rebuilds the DB. DANGER!
    await delete_art_table();
    await init_tables();
}

async function add_art_to_db(artObject) {
    const text = `INSERT INTO public.art_details (subject, time_added, surveyor, location,
             medium, art_type, colors, creation_year, img_links,
            artist, dimensions, is_indoors, is_movable, owner, src, value,
            restrictions, work_condition, yuag_id, note)
            VALUES ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,
            $14, $15, $16, $17, $18, $19)`;
    const values = [artObject.subject, artObject.surveyor, artObject.loc,
        artObject.medium, artObject.artType, artObject.workColors, artObject.creationYear,
        artObject.imageLinks, artObject.artist, artObject.dimns, artObject.isIndoors,
        artObject.isMovable, artObject.owner, artObject.source, artObject.value,
        artObject.restrictions, artObject.condition, artObject.yuagID, artObject.note];

    try {
        await pool.query(text, values);
        console.log('work added: ' + artObject.subject)
    } catch (err) {
        console.log('err in art insertion: ' + err.stack)
    }
}

// make a prototypical art function
function Artwork(subject, surveyor, loc, medium, artType, workColors, isIndoors,
                 isMovable, creationYear, imageLinks, artist, dimns, owner, source,
                 value, restrictions, condition, note, yuagID) {
    this.subject = subject || 'Untitled';  // subject or name of the work, if existent
    this.surveyor = surveyor || 'Unknown'; // name of whomever surveyed the piece
    this.loc = loc || 'Unknown';  // location coord of the work
    this.medium = medium || 'Unknown';  // medium (e.g., glass)
    this.artType = artType || 'Unknown';  // broad type of art (e.g., sculpture)
    this.workColors = workColors || 'Unknown';  // colors involved in the work
    this.isIndoors = isIndoors || false;  // boolean value: is it indoors?
    this.isMovable = isMovable || false; // bool: can this be easily moved?
    this.creationYear = creationYear || 0;  // creation year, if known. default 0.
    this.imageLinks = imageLinks || 'No images';  // links to photos of the work
    this.artist = artist || 'Unknown';  // artist/creator of the work, if known
    this.dimns = dimns || 'Unknown';  // rough dimensions of the work (e.g., 3x4 ft)
    this.owner = owner || 'Unknown';  // who owns the piece - YUAG? a res college?
    this.source = source || 'Unknown';  // from where was this piece obtained?
    this.value = value || 0;  // rough value of the piece in USD, if assessed
    this.restrictions = restrictions || 'Unknown';  // are there restrictions?
    this.condition = condition || 'Unknown';  // what condition is the piece in?
    this.note = note || 'None';  // any notes about the work, if any
    this.yuagID = yuagID || 'None';  // if it has an ascension number, then that
}

async function test() {  // a function to test basic db functionality
    let testWork = new Artwork('Me (self portrait)', 'barney the dinosaur', 1.00000100, 2.00000200,
        'oil on canvas', false, 'purple', true, true, 1000, 'https://google.com', 'PBS', '1x1', 'JE',
        'a rich person', 100000, 'none known', 'very good', 'it\'s a purple dinosaur', false);

    await db_test();
    // await rebuild();  // For debugging: deletes and rebuilds the db.
    await add_art_to_db(testWork);
}


async function clear() {
  await pool.query('DELETE FROM ONLY public.art_details');
}

async function pull() {
  try {
    const response = await pool.query('SELECT * FROM public.art_details');
    return response.rows;
  } catch (err) {
    console.log('error: ' + err);
  }
}

// end database logic

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

//express serves static files from react build
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/pull', async function (req, res, next) {
  console.log("call to /pull");
    const response = await pull();
    console.log(response);
    res.status(200).send(response);

});

app.post('/file', async (req, res, next) => {
    console.log("req " + req.body.id);
    const down = await storage
      .bucket('yuag-public-art')
      .file(req.body.id + ".jpg")
      .download({destination:"./public/" + req.body.id + ".jpg"});
    let paths = req.body.id + ".jpg";
    res.download(path.join(__dirname, './public', paths));
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// turns the submitted json object into an Artwork object + submits to db
app.post('/submit', upload.array(), async function (req, res, next) {
    console.log(req.body);  // for debugging purposes: include the full request

    if (isNaN(req.body.date)) {  // if date isn't a num
        return res.status(400).send('Date must be a Number')
    } else if (isNaN (req.body.value)) {  // if value isn't a num
        return res.status(400).send('Value must be a number')
    } else if(!req.body.id){
        return res.status(400).send('ID must not be blank')
    } else {  // aka: if things seem fine
        const artObject = new Artwork(req.body.subject, req.body.surveyor, req.body.location,
            req.body.medium, false, false, false, false, req.body.date, false, req.body.artist,
            req.body.dimensions, req.body.owner, req.body.source, req.body.value,
            req.body.restrictions, req.body.condition, req.body.notes, req.body.id);
        try {
          const text = `INSERT INTO public.art_details (subject, time_added, surveyor, location,
                   medium, art_type, colors, creation_year, img_links,
                  artist, dimensions, is_indoors, is_movable, owner, src, value,
                  restrictions, work_condition, yuag_id, note)
                  VALUES ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,
                  $14, $15, $16, $17, $18, $19)`;
          const values = [artObject.subject, artObject.surveyor, artObject.loc,
              artObject.medium, artObject.artType, artObject.workColors, artObject.creationYear,
              artObject.imageLinks, artObject.artist, artObject.dimns, artObject.isIndoors,
              artObject.isMovable, artObject.owner, artObject.source, artObject.value,
              artObject.restrictions, artObject.condition, artObject.yuagID, artObject.note];

              await pool.query(text, values);

              console.log('work added: ' + artObject.subject)
        } catch (err) {
            return res.status(500).send('db error');
        }
    }
    return res.status(200).send('ok');
});



//takes uploaded image file and saves locally to public directory
app.post('/upload', async (req, res, next) => {
  if(!req.files){
    return res.status(404).send("No Image File!");
  }
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
      });
    storage
      .bucket('yuag-public-art')
      .upload(`${__dirname}/public/${req.body.filename}.jpg`, 'yuag')
      .then(() => {
        console.log('file uploaded');
      });
        res.send("yes");

});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
