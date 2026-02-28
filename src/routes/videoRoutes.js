const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Rota para CRIAR um vídeo (POST)
router.post('/', videoController.createVideo);

// Rota estática para listar os TOP 10 (GET)
// ATENÇÃO: Esta rota DEVE vir antes da rota de categoria. 
// Se viesse depois, o Express acharia que "top" é o nome de uma categoria!
router.get('/top', videoController.getTopVideos);

// Rota com parâmetro dinâmico para listar por categoria (GET)
// O valor passado na URL (ex: /videos/category/acao) vai para req.params.category
router.get('/category/:category', videoController.getVideosByCategory);

module.exports = router;