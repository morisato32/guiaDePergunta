const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./database/database')
//database
/*connection erro DIz que não é uma função!!
    .authenticate()
    .then(()=>{
        console.log("conexão feita com sucesso!")
    })
    .cath((msgErro) =>{
        console.log(msgErro)
    })*/
const routerIndex = require('./rotas/routerIndex')
const routerPerguntar = require('./rotas/routerPerguntar')

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false})) // pega os dados enviados pelo usuario e transforma em uma estrutura javascripts
app.use(bodyParser.json()); // arquivos em formato json
app.use('/',routerIndex);
app.use('/perguntar',routerPerguntar);

app.listen(4000,(error) =>{
    if(error){
        console.log("Ouve um erro!")
    }else{
        console.log("Servidor rodando na porta 4000")
    }
})