var express = require('express');
const Sequelize = require('sequelize');
const PORT = process.env.PORT || 3000;
const DB_PASSWORD = String(process.env.PASSWORD);
const HOST = process.env.HOST || 'ec2-52-55-107-25.compute-1.amazonaws.com';
var app = express();

console.log('local port: %s\ndb location: %s\ndb password: %s', PORT, HOST, DB_PASSWORD)

// set up time: make an object with all the data Sequelize needs to connect
const database = new Sequelize({
    database: 'publicart',
    username: 'postgres',
    password: DB_PASSWORD,
    host: HOST,
    dialect: 'postgres',
    operatorsAliases: false,
});

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

database
    .query(
        `SELECT COLUMN_NAME 
        FROM information_schema.COLUMNS 
        WHERE TABLE_NAME = 'art_details'`
    )
    .spread((results, metadata) => {
        console.log(results)
    })

app.use(express.static(__dirname + './../../')); //serves the index.html
app.listen(PORT); //listens on localhost on specified port (default 3000)

