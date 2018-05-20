const db = require('../models/db');
var fs = require('fs');
var http = require('http');
var formidable = require('formidable');

var multiparty = require('multiparty');
var http = require('http');
var util = require('util');

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


module.exports.sayBye = function(req, res){
    res.send("Bye!");
};

module.exports.Alldb = function(req, res){
    res.send(db);
};


module.exports.Indexdb = function(req, res){
    //res.send(req.params);
    res.render('view', { view : db[req.params.index] });
}


//generate html files for upload start
function buildHtml(title, description, fileselect, uploaderName) {
  var header = '';
  var body = '<h1>Hello World! retest</h1>';
  var currentPath = process.cwd();


    var fs = require('fs'); //Filesystem    

    var content = fs.readFileSync(currentPath + '/public/activities/test/dummypage.html',"utf-8");
    
    var content2 = content.replace('Dummy Results##1title', title);
    var content3 = content2.replace('Description##1', description);
    var content4 = content3.replace("https://studybreaks.com/wp-content/uploads/2017/08/books.jpg", fileselect);
    var content4 = content4.replace("Example content####Uploadername", 'Activity by: ' + uploaderName);
    //console.log(content4);


    return content4;
};

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://swright3:info30005@ds117730.mlab.com:17730/info30005';

var findDocuments = function(db, callback) {
    var collection = db.collection('info30005');

    collection.find().toArray(function(err,docs){
        if (err) throw err;
        //console.log(docs);
        callback;
    })

}

var insertDocuments = function(ins_title, ins_desc, htmlFileDet, uploaderName, cloudinaryUpload){
    MongoClient.connect(url, function(err, client){
        if (err) throw err;
        var collection = client.db('info30005').collection('info30005');
        collection.find().count()
                .then(function(numItems) {
                //console.log(numItems); // The number of records in the table
            });
            //;


        collection.insertOne(
        {
          title: ins_title,
          desc: ins_desc,
          fileLink: htmlFileDet,
          user: uploaderName,
          imageLink: cloudinaryUpload
        })


        findDocuments(client.db('info30005'), function(){
            db.close();
        });
    })
}

function searchDocuments(searchTerm, res){
  var results;
  var searchResults = "No results found"
    MongoClient.connect(url, function(err, client){
        if (err) throw err;
        var collection = client.db('info30005').collection('info30005');
        
        collection.find( { $text: { $search: searchTerm } }).toArray(function(err, results){
            console.log(results);
            client.close();
            var searchResults = generateSearchTable(results);
            res.render('pages/search', { myVar : searchTerm , searchResults : searchResults});
        });

    })
}


module.exports.generateHtmlFile = function(req, res){
    var activityNum = "1" //need to get the activity num based on the number of activities in the db
    var currentPath = process.cwd();


    const dir = currentPath + '/public/activities/test';

    fs.readdir(dir, (err, files) => {
        activityNum = files.length - 6;
    });

    var form = new multiparty.Form();

    var title;

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var cloudinary = require('cloudinary');
      title = util.inspect(fields['title']).replace(/'/g, '');

      cloudinary.config({ 
      cloud_name: 'dkyqddfoh', 
      api_key: '616718934327811', 
      api_secret: '45ivSzjhmCguGDef9OqVfhOwqE8' 
      });

      var oldpath = files.filetoupload.path;
      cloudinary.uploader.upload(oldpath, function(result) { 
        cloudinaryUpload = result['url'] 
        console.log(cloudinaryUpload)
        description = util.inspect(fields['description']).replace(/'/g, '');
        console.log(description);
        title = util.inspect(fields['title']).replace(/'/g, '');
        console.log(title);
        uploaderName = req.user['username'];
        console.log(uploaderName);
        var htmlFileDet = 'activity' + activityNum + '.html';
        insertDocuments(title, description, htmlFileDet , uploaderName, cloudinaryUpload);
          fs.writeFile(currentPath + '/public/activities/test/activity' + activityNum + '.html', buildHtml(title, description, cloudinaryUpload, uploaderName), function (err) {
          if (err) throw err;
          //console.log('New File!'); 
          });
        });

    });

    //should notify the user of successful upload
    //should use the example data template
    //var activityNum;

    fs.readdir(dir, (err, files) => {
        activityNum = files.length - 6;
    });
    
    req.flash('success_msg', 'Activity created');
    res.redirect('/')
};

//generate html files for upload end

//function for generating the html for the results table
function generateSearchTable(searchResultsArray){

    if(searchResultsArray.length > 0){
      var html = '<div class="row">';
      var i;
      //console.log(searchResultsArray.length);
      //console.log(searchResultsArray);
      for (i = 0; i < searchResultsArray.length; i++) {
        if(i%4 == 0){
          html += '</div><br><div class="row">'
          //console.log("new row");
        }
        html += '<div class="col-sm-3"><div class="card" style = "width:80%; margin-right:10%; margin-left:10%"><img class="card-img-top" src="' + "http://res.cloudinary.com/dkyqddfoh/image/upload/v1525861227/wzio36zeshjuekmzn54t.jpg" + '" alt="Card image"><div class="card-body"><h4 class="card-title">' + searchResultsArray[i]['title'] + '</h4><p class="card-text">Author: ' + searchResultsArray[i]['user'] + '<br>Rating: 4.7</p><a href="' + '/activities/test/' + searchResultsArray[i]['fileLink'] + '" class="btn btn-primary">See Activity</a></div></div></div>';
      }
      html += '</div>'
      return html}

    else{
      return "No results found"
    };


}

module.exports.searchPage = function(req, res){
    var myVar = req.query.search; //search is the name of the input box
    var searchResults;
     searchResults = searchDocuments(req.query.search, res);

};