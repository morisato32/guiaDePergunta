const pergunta = require("../database/Pergunta");

const perguntaIdController ={
    perguntaId: (req,res) =>{
        let id = req.params.id; 
        pergunta.findOne({
            WHERE: {id : id}
        }).then(pergunta =>{
            if(pergunta != undefined){ //pergunta encontrada
                 res.render('pergunta')
            }else{ // não encontrada
                res.redirect('/')
            }
        })
    }
}

module.exports = perguntaIdController;