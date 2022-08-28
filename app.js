const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./database/database')
//database
connection 
    .authenticate()
    .then(()=>{
        console.log("conexão feita com sucesso!")
    })
    .catch((msgErro) =>{
        console.log(msgErro)
    })

const routerPerguntar = require('./rotas/routerPerguntar');
const routerSalvarPergunta = require('./rotas/routersalvarPergunta');


app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false})) // pega os dados enviados pelo usuario e transforma em uma estrutura javascripts
app.use(bodyParser.json()); // arquivos em formato json
app.use('/perguntar',routerPerguntar);
app.use('/salvarpergunta',routerSalvarPergunta);


app.listen(4000,(error) =>{
    if(error){
        console.log("Ouve um erro!")
    }else{
        console.log("Servidor rodando na porta 4000")
    }
})