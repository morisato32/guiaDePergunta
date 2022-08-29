const sequelize = require('sequelize');
const connection = new sequelize('guiaperguntas','root','1986P@ulo',{ // nome do banco de dados, onde está rodando, a senha
    host:'localhost', // computador local
    dialect:'mysql', // tipo de banco para se conectar no sequelize
    logging:false    // tirando essa mensagem do terminal (Executing (default): SELECT 1+1 AS result)
})

module.exports = connection;