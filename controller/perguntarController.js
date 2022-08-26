const perguntarController = {
    perguntar:(req,res) => {
        return res.render('perguntar.ejs')
    },
    salvarPergunta:(req,res) =>{
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        res.send("Formulario enviado! " +"titulo " + titulo + " descricao " + descricao)
    }
}

module.exports = perguntarController;