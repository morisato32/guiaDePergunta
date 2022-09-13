const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const resposta = require('./database/Resposta');
const pergunta = require('./database/Pergunta');


//database
connection 
    .authenticate()
    .then(()=>{
        console.log("conexão feita com sucesso!")
    })
    .catch((msgErro) =>{
        console.log(msgErro)
    })
// rotas
const routerPerguntar = require('./rotas/routerPerguntar');
const routerIndex = require('./rotas/routerIndex');
const routerResposta = require('./rotas/routerResposta');


// engine ejs
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));
// poderiamos ter usado do proprio express sem precisar baixar bodyParser
//app.use (express.urlencoded ({ extended: true }))
//app.use (express.json())
app.use(bodyParser.urlencoded({extended:false})) // pega os dados enviados pelo usuario e transforma em uma estrutura javascripts
app.use(bodyParser.json()); // arquivos em formato json

// usando as rotas
app.use('/perguntar',routerPerguntar);
app.use('/salvarpergunta',routerPerguntar);
app.use('/',routerIndex);
app.use('/pergunta',routerPerguntar);
app.use('/',routerResposta);
app.use((req,res,next) =>{
    res.status(404).render("naoEncontrado")
})


app.listen(4000,(error) =>{
    if(error){
        console.log("Ouve um erro!")
    }else{
        console.log("Servidor rodando na porta 4000")
    }
})