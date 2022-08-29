const pergunta = require("../database/Pergunta");

const salvarPerguntaController ={
    salvarPergunta:(req,res) =>{
        // recebendo dados do formulario
        let titulo = req.body.titulo  
        let descricao = req.body.descricao
         // insere dados na tabela pergunta
        pergunta.create({  
            titulo: titulo,
            descricao:descricao
        }).then(() => {     // redireciona para a url raiz
            res.redirect('/')
        })
    }
}


module.exports = salvarPerguntaController;