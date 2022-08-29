const pergunta = require("../database/Pergunta");

const indexController = {
    index:(req,res) =>{
        // lista todas as perguntas
        pergunta.findAll({raw:true}).then(perguntas => {  //{raw:true - pega a informação crua só o que foi pedido no formulario}
            return res.render('index',{
                perguntas:perguntas
            })
       })
      
    }
}

module.exports = indexController;