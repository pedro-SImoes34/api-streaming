const mongoose = require('mongoose');

const historySchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId, //ObjectId avisa ao Mongoose que vamos guardar o ID único de um outro documento
        ref: 'User', //ref (referência), o UserId tem que pertencer a um usuário real cadastrado no sistema.
        required: true
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        required: true
    },
    viewDate: {type: Date, default: Date.now},
    progress: {type: Number, required: true, min: 0, max: 100}, //O Mongoose nos deixa definir que o progress deve ser no mínimo 0% e no máximo 100%
    rating: {type: Number, min: 1, max: 5}
});

historySchema.index({userId: 1, viewDate: -1}); //Buscar histórico do usuário e já retornar ordenado do vídeo mais recente primeiro ao mais antigo

module.exports = mongoose.model('History', historySchema); //Junta o nome 'History' com o nosso molde (historySchema) e cria o modelo final. E por fim, exporta esse modelo para poder ser usado em outras partes do sistema