const pergunta = require("../database/Pergunta");

const perguntaIdController = {
  perguntaId: (req, res) => {
    let id = req.params.id;
  
    pergunta.findByPk(id).then((p) => {
      
      if (p != null) {
        //pergunta encontrada
        res.render("pergunta");
      } else {
        // não encontrada
        res.redirect("/");
      }
    });
  },
};

module.exports = perguntaIdController;
