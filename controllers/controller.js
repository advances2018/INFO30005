const db = require('../models/db');

module.exports.sayHi = function(req, res){
	res.send("Hi!");
};

module.exports.indexPage = function(req, res){
    res.render('index', { link: "moreInfo.html" });
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

