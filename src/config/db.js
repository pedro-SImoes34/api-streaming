const mongoose = require('mongoose'); //Importa todo o código da pasta 'node_modules' e guarda na variável 'mongoose'

const connectDB = async () => { //assync = assíncrono. Avisa ao node que essa função possui tarefas que vão demorar um pouco para serem processadas
    try{ 
       await mongoose.connect(process.env.MONGO_URI); //await diz pro Node pausar a execução do código e esperar o banco de dados responder antes de continuar. 
       //Para não passar endereço e senha diretamente no código nós buscamos essa informação em .env (onde MONGO_URI é o nome da variável que guarda o endereço). O comando process.env é a forma do Node.js ler as informações desse arquivo secreto.
       console.log('MongoDB conectado!')
    } catch (error) { //se a execução do try falhar, o node entra no catch e podemos mostrar uma mensagem explicando o erro em vez do programa 'travar'
        console.error('Erro ao conectar o MongoDB:', error);
        process.exit(1); //process é o node rodando. O .exit(1) manda o programa ser encerrado e o número 1 indica que o programa fechou por causa de uma "falha" (se fechasse normalmente, seria 0)
    }
};

module.exports = connectDB; //Compartilhar a função para fora deste arquivo