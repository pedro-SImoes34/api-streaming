const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({ //Schema é como se fosse o molde dos vídeos
    title: {type: String, required: true}, //type string faz o programa só aceitar títulos contendo palavras. O required true faz o título ser obrigatório para o cadastro do vídeo
    category: {type: String, required: true},
    duration: {type: Number, required: true}, //duração em minutos

    //novos campos com valores padrão (automáticos):
    views: {type: Number, default: 0}, //O vídeo começa sem nenhuma visualização, e vai crescendo depois
    averageRating: {type: Number, default: 0}, //Nota média
    createdAt: {type: Date, default: Date.now} //Date.now captura o momento exato em que o vídeo está sendo salvo no banco de dados
});

//Índices: otimizando a pesquisa por vídeos:
videoSchema.index({views: -1}); //-1 significa ordem decrescente, retornando os vídeos mais assistidos
videoSchema.index({category: 1}); //1 significa ordem crescente, retornando os vídeos ordenados pela categoria em ordem alfabética

module.exports = mongoose.model('Video', videoSchema);