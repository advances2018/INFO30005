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

module.exports.sayBye = function(req, res){
	res.send("Bye!");
};

module.exports.Alldb = function(req, res){
	res.send(db);
};

module.exports.Indexdb = function(req, res){
	res.render('view', { view : db[req.params.index] });
};

