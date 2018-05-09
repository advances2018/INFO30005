/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
// Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database setup
//const MongoClient = require('mongodb').MongoClient;
//const db = require('./models/db2');
//require('./models/createdb.js');

//view engine setup
app.set('view engine', 'ejs');

// Routes setup
const router = require('./routes/routes');
app.use(express.static(__dirname + '/public'));
app.use(router);

// Start the server
app.listen(3000,function(req,res){
    console.log('Express listening on port 3000');
});

