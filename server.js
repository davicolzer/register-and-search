const express = require('express')
const bodyParser = require('body-parser');
const { response } = require('express');
const axios = require('axios');
const { json } = require('body-parser');

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Rotas

app.get("/", (request, response)=>{
    response.sendFile(__dirname + '/front/index.html')
})

 app.post('/data' , (request,response)=>{
    const data  = request.body

    async function enviarObjeto(info) {
        const resposta = await axios.post("http://138.68.29.250:8082",info,{
            headers:{
                "content-type" : "application/x-www-form-urlencoded",
            }
        })
      

        console.log(resposta.data);
        
        // Variavel de teste devido Erro ao pegar dado na API
        //let teste = "davi#331#lira#332#davicolzer@gmail.com#333"

        
    }

    enviarObjeto(data)
    
    const {nome, sobrenome, email} = data
    response.end(`${nome}, ${sobrenome}, ${email}`);    
})

app.listen(8000,()=>{
    console.log('Server Started on port 8000')
})



