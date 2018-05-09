const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.indexPage);

router.get('/login', controller.loginPage);

router.get('/about', controller.aboutPage);

router.get('/news', controller.newsPage);

router.get('/Bye', controller.sayBye);

router.get('/db', controller.Alldb);

router.get('/db/:index', controller.Indexdb);

router.get('/search', controller.searchPage);

router.get('/register', controller.registerPage);

router.get('/forgot', controller.forgotPage);

//router.get('/dummypage', controller.dummypage);

//router.get('/generateHtmlFile', controller.generateHtmlFile);

router.post('/upload', controller.generateHtmlFile);

module.exports = router;