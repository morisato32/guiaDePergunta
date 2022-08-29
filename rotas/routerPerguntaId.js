const express = require('express');
const perguntaIdController = require('../controller/perguntaIdController');
const router = express.Router();



router.get('/',perguntaIdController.perguntaId);

module.exports = router;