const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.indexPage);

router.get('/Bye', controller.sayBye);

router.get('/db', controller.Alldb);

router.get('/db/:index', controller.Indexdb);


module.exports = router;