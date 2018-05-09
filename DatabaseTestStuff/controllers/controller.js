//const db = require('../models/createdb.js');

module.exports.sayHi = function(req, res){
    res.send("Hi!");
};

module.exports.indexPage = function(req, res){
    res.render('pages/index', { link: "moreInfo.html" });
};

module.exports.loginPage = function(req, res){
    res.render('pages/login');
};

module.exports.aboutPage = function(req, res){
    res.render('pages/about');
};

module.exports.newsPage = function(req, res){
    res.render('pages/news');
};

module.exports.forgotPage = function(req, res){
    res.render('pages/forgot');
};

module.exports.registerPage = function(req, res){
    res.render('pages/register');
};

module.exports.forgotPage = function(req, res){
    res.render('pages/forgot');
};

module.exports.sayBye = function(req, res){
    res.send("Bye!");
};


module.exports.dummypage = function(req, res){
    res.render('pages/dummypage');
};

module.exports.Indexdb = function(req, res){
    //res.send(req.params);
    res.render('view', { view : db[req.params.index] });
};




//function for generating the html for the results table
function generateSearchTable(searchTerm){
    var html = '<table class = "table table-striped table-bordered table-hover" style="width:80%; margin-left: 10%"><tbody>';
    html += '<tr><th>Activity</th><th>User</td><th>Rating</th></tr>';
    var i;
    for (i = 0; i < 20; i++) {
        html += '<tr><td><a href="dummypage">Example Result</a></td><td>' + searchTerm + " test " + i + '</td><td>xxx</td></tr>';
    }

    html += '</tbody></table>';
    return html;

}

module.exports.searchPage = function(req, res){
    var myVar = req.query.search; //mytext is the name of your input box
    var searchResults;
    searchResults = generateSearchTable(myVar);
    //res.send('Your Text: ' +myText);
    res.render('pages/search', { myVar : myVar , searchResults : searchResults});
};


/*
//Db part
var mongoose = require('mongoose');
var Content_schema = mongoose.model('info30005');

//creating data

var upload_content = function (req,res) {
    var content = new Content_schema({
        "content_name": req.body.content_name,
        "content_creator_name": req.body.content_creator_name,
        "content_upload_date": req.body.content_upload_date,
        "content_link": req.body.content_link,
        "content_description": req.body.content_description,

        //handling tags

        //linking comments
});
    content.save(function(err,newContent){
        if(!err){
            res.send(newContent);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAll = function(req,res){
    Content_schema.find(function(err,contentSchema){
        if(!err){
            res.send(contentSchema);
            console.log(contentSchema);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.upload_content = upload_content;
module.exports.findAll = findAll;

var upload_content_fixed = function (title, creator_name, date, link, desc, req, res) {
    console.log("upload_content_fixed called");
    var content = new Content_schema({
        "content_name": title,
        "content_creator_name": creator_name,
        "content_upload_date": date,
        "content_link": link,
        "content_description": desc,

        //handling tags

        //linking comments
});
    content.save(function(err,newContent){
        if(!err){
            //console.log(newContent);
            //res.send(newContent);
        }else{
            //res.sendStatus(400);
            //console.log(400);
        }
    });
};

upload_content_fixed("stest", "stestname", "stestdate", "stestlink", "stestdesc");

db.collection('info30005').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works! x 2'
    })

*/


var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://swright3:info30005@ds117730.mlab.com:17730/info30005';

var findDocuments = function(db, callback) {
    var collection = db.collection('info30005');

    collection.find().toArray(function(err,docs){
        if (err) throw err;
        console.log(docs);
        callback;
    })

}

/*
var insertDocuments = function(db, callback, ins_title, ins_desc) {
    var collection = db.collection('info30005');

    collection.insertOne(
    {
      title: ins_title,
      desc: ins_desc
    })

}
*/

var insertDocuments = function(ins_title, ins_desc){
    MongoClient.connect(url, function(err, client){
        if (err) throw err;
        // console.log("it is working");
        // db.close();
        //insertDocuments(client.db('info30005'), ins_title, ins_desc);
        var collection = client.db('info30005').collection('info30005');
        collection.find().count()
                .then(function(numItems) {
                console.log(numItems); // The number of records in the table
            });
            //;


        collection.insertOne(
        {
          title: ins_title,
          desc: ins_desc
        })


        findDocuments(client.db('info30005'), function(){
            db.close();
        });
    })
}

insertDocuments("Test title", "Test desc 4");

