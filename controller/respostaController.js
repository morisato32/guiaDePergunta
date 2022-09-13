const resposta = require('../database/Resposta');

const respostaController ={
    resposta:(req,res) =>{
        let corpo = req.body.corpo
        let perguntaId = req.body.pergunta
        resposta.create({
          corpo:corpo,
          perguntaId:perguntaId
         
        }).then(() =>{
          res.redirect('/pergunta/' + perguntaId)
        })
        
      }
}

module.exports = respostaController;