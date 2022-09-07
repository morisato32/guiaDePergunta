const express = require('express');
const perguntarController = require('../controller/perguntarController');

const router = express.Router();

router.get('/',perguntarController.perguntar);// app.use('/perguntar',routerPerguntar);
router.get('/:id',perguntarController.perguntaId); // Faz referência a -> app.use('/pergunta',routerPerguntar);
router.post('/',perguntarController.salvarPergunta);//app.use('/salvarpergunta',routerPerguntar);


module.exports = router;