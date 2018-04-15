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

module.exports.searchPage = function(req, res){
    var myVar = req.query.search; //mytext is the name of your input box
    var searchResults = ["test1", "test2", "test3"];
    //res.send('Your Text: ' +myText);
    res.render('pages/search', { myVar : myVar , searchResults : searchResults});
};