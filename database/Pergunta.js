const sequelize = require('sequelize');
const connection = require('./database');

const pergunta = connection.define('pergunta',{
    titulo:{
    type: sequelize.STRING, // tipo string (textos curtos)
    allowNull: false // o campo não fica vazio
    },
    descricao:{
        type: sequelize.TEXT, // textos longos
        allowNull: false
    }
});
// se a tabela existir não recrie se não crie
pergunta.sync({force:false}).then(() =>{});

module.exports = pergunta;