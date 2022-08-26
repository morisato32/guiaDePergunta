const indexController = {
    index:(req,res) =>{
       return res.render('index',{
        nome:"Paulo",
        lang:"Node js",
        empresa:"Guia do Programador"
    })
    }
}

module.exports = indexController;