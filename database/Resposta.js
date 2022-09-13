const sequelize = require('sequelize');
const connection = require('./database');

const resposta = connection.define('resposta',{
   corpo:{
    type: sequelize.TEXT, // tipo string (textos longos)
    allowNull: false // o campo não fica vazio
    },
    perguntaId:{
        type: sequelize.INTEGER, // numero inteiro

        allowNull: false
    }
});
// se a tabela existir não recrie se não crie
resposta.sync({force:false}).then(() =>{});

module.exports = resposta;