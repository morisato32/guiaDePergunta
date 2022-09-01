const express = require('express');
const perguntaIdController = require('../controller/perguntaIdController');
const router = express.Router();



router.get('/:id',perguntaIdController.perguntaId);

module.exports = router;