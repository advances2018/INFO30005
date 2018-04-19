const db = require('../models/db');

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

module.exports.Alldb = function(req, res){
    res.send(db);
};

module.exports.dummypage = function(req, res){
    res.render('pages/dummypage');
};

module.exports.Indexdb = function(req, res){
    //res.send(req.params);
    res.render('view', { view : db[req.params.index] });
}


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