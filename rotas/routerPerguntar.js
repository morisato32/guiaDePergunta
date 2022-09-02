const express = require('express');
const perguntarController = require('../controller/perguntarController');

const router = express.Router();

router.get('/',perguntarController.perguntar);
router.get('/:id',perguntarController.perguntaId);
router.get('/',perguntarController.salvarPergunta);


module.exports = router;