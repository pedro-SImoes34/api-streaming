const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true}, //Unique faz com que o email pertenca à apenas uma pessoa
    profiles: [{ // O uso de colchetes faz com que o mongoose entenda que um usuário (objeto) possa ter vários perfis (array)
        name: {type: String, required: true},
        ageGroup: {type: String, enum: ['infantil', 'adulto'], required: true} //Enum faz o sistema só aceitar as palavras dentro dos colchetes
    }],
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);