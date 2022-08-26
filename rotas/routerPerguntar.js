const express = require('express');
const perguntarController = require('../controller/perguntarController');

const router = express.Router();

router.get('/',perguntarController.perguntar);
router.post('/',perguntarController.salvarPergunta);

module.exports = router;