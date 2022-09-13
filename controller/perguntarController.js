const pergunta = require("../database/Pergunta");
const resposta = require("../database/Resposta");

const perguntarController = {
  perguntar: (req, res) => {
    return res.render("perguntar.ejs");
  },
  perguntaId: (req, res) => {
    let id = req.params.id;

    pergunta.findByPk(id).then((p) => {
      if (p != null) {
        resposta
          .findAll({
            where: { perguntaId: p.id },order:[['id','DESC']]
          })
          .then((resposta) => {
            res.render("pergunta", { p, resposta }); //pergunta encontrada
          });
      } else {
        // não encontrada
        res.redirect("/");
      }
    });
  },
  salvarPergunta: (req, res) => {
    // recebendo dados do formulario
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    // insere dados na tabela pergunta
    pergunta
      .create({
        titulo: titulo,
        descricao: descricao,
      })
      .then(() => {
        // redireciona para a url raiz
        res.redirect("/");
      });
  },
};

module.exports = perguntarController;
