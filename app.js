var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Sequelize = require('sequelize');
const DB_PASSWORD = String(process.env.PASS) || "";
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'ec2-52-55-107-25.compute-1.amazonaws.com';

console.log('local port: %s\ndb location: %s\ndb password: %s',
    PORT, HOST, DB_PASSWORD);

if (DB_PASSWORD == ""){
    console.log('no password specified - terminating');
    process.exit(1)
}

let database = new Sequelize({
    database: 'publicart',
    username: 'postgres',
    password: DB_PASSWORD,
    host: HOST,
    dialect: 'postgres',
    operatorsAliases: false,
});

function open_db() {
    // now it's time to actually attempt to connect to the db
    database
        .authenticate()
        .then(() => {
            console.log('we did it, connection worky!');
        })
        .catch(err => {
                console.log('connection failed :(', err)
            }
        );
}

// test fn - describe the art_details table
function db_test() {
    database
        .query(
            `SELECT COLUMN_NAME 
        FROM information_schema.COLUMNS 
        WHERE TABLE_NAME = 'art_details'`
        )
        .spread((results, metadata) => {
            console.log(results);
            console.log('sample query successful')
        });
}

open_db();
db_test();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());





app.get('/users', function(req, res, next){
	let data = {
		message: "Hello World!"
	};
	res.status(200).send(data);
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
