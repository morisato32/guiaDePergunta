const express = require('express');
const perguntarController = require('../controller/perguntarController');

const router = express.Router();

router.get('/',perguntarController.perguntar);

module.exports = router;