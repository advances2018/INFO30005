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
};

//function for generating the html for the results table
function generateSearchTable(searchTerm){
    var html = '<table class = "resultsTable" style="width:80%"><tbody>';
    html += '<tr><td>Title 1</td><td>' + searchTerm + " test " + '0' + '</td><td class ="resultsTopRight">xxxx</td></tr>';
    var i;
    for (i = 1; i < 20; i++) { 
        html += '<tr><td>Title ' + i + '</td><td>' + searchTerm + " test " + i + '</td><td>xxx</td></tr>';
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