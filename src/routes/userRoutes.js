const express = require('express');
const router = express.Router();

// Importamos o controlador que contém as regras
const userController = require('../controllers/userController');

// Rota para CRIAR um usuário (POST)
// O cliente envia os dados (nome, email, perfis) no corpo da requisição (req.body)
router.post('/', userController.createUser);

// Rota para LISTAR todos os usuários (GET)
router.get('/', userController.getUsers);

module.exports = router;