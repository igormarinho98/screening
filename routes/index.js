var express = require('express');
var router = express.Router();
var service = require('./../services/index');

router.get('/', service.home);
router.get('/login', service.login);
router.get('/register', service.register);

module.exports = router;
