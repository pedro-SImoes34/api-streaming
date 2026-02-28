const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

// Rota para REGISTRAR uma visualização (POST)
// Dispara o $inc (views) e o $group (média de notas) lá no controller
router.post('/', historyController.registerView);

// Rota para BUSCAR o histórico de um usuário específico (GET)
// O :userId na URL será usado no $lookup para cruzar dados com a coleção de vídeos
router.get('/user/:userId', historyController.getUserHistory);

module.exports = router;