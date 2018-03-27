const express = require("express");
const myweb = express();
const PORT = process.env.PORT || 3000;

myweb.set('view engine', 'ejs');
const router = require('./routes/routes');
myweb.use(express.static(__dirname + '/public'));

myweb.use(router);

myweb.listen(3000,function(){
	console.log("server started");
});
