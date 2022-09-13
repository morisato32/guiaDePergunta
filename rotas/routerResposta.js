const express = require('express');
const respostaController = require('../controller/respostaController');

const router = express.Router();

router.post('/resposta',respostaController.resposta);

module.exports = router;