// Create database
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://swright3:info30005@ds117730.mlab.com:17730/info30005',function(err, db){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
    console.log(mongoose.connection.readyState);
    db.collection('info30005').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    })
});

require('./contentdb.js');
*/

const MongoClient = require('mongodb').MongoClient;
const db = require('./db2');

MongoClient.connect(db.url,(err,database) =>{

    if (err) return console.log(err)
    //require('./app/routes')(app,{});
    //check below line changed
     require('./app/routes')(app, database);
    app.listen(port,() => {
        console.log("We are live on"+port); 
    });

})
