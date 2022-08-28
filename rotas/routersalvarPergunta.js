const express = require('express');
const salvarPerguntaController = require('../controller/salvarPerguntaController');

const router = express.Router();

router.post('/',salvarPerguntaController.salvarPergunta);

module.exports = router;