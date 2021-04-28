const mongoose = require("mongoose")


//Configurando o mongoose
mongoose.connect("mongodb://localhost/aprendendo")
    .then(() => {
        console.log("Conectado ao servido com sucesso!",{
            useNewUrlParser: true,
        })
    })
    .catch((erro) => {
        console.log("Houve um erro: " + erro)
    })

    //model - Usuários
    //Definindo model
    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

    //Collection ("tabelas" se fosse MySQL)
    const usuario = mongoose.model("usuarios",UsuarioSchema)
    
    new usuario ({
        nome: "Poliana",
        sobrenome: "Gomes",
        email: "polly-pocket@hotmail.com",
        idade: 22,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((erro) => {
        console.log("Houve um erro ao tentar registrar usuário: " + erro)
    })