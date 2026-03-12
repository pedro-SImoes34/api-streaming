# 🎬 API de Plataforma de Streaming

Esta é uma API RESTful desenvolvida em Node.js, Express e MongoDB (Mongoose) para gerenciar usuários, vídeos e histórico de visualizações, simulando o backend de uma plataforma de streaming.

## 🚀 Tecnologias Utilizadas
* Node.js
* Express
* MongoDB (com Mongoose)
* Dotenv (para variáveis de ambiente)

## ⚙️ Requisitos Técnicos Implementados
* **Índices Manuais:** Otimização de buscas por categoria, visualizações e histórico.
* **Aggregations:** Uso avançado do MongoDB ($inc, $group, $lookup, $sort) para regras de negócio (cálculo de nota média, views e junção de histórico).

## 🛠️ Como instalar e rodar o projeto

1. **Clone o repositório:**
   git clone URL_DO_SEU_REPOSITORIO
   cd NOME_DA_PASTA

2. **Instale as dependências:**
   npm install

3. **Configure as Variáveis de Ambiente:**
   * Crie um arquivo chamado `.env` na raiz do projeto.
   * Adicione a linha abaixo e insira a URI do seu próprio cluster do MongoDB:
   PORT=3000
   MONGO_URI="# Substitua pela sua conexão do MongoDB"

4. **Inicie o servidor:**
   node src/server.js

## 📍 Principais Endpoints (Rotas)

### Usuários
* POST /api/users - Cria um novo usuário (com lista de perfis).
* GET /api/users - Lista todos os usuários.

### Vídeos
* POST /api/videos - Cadastra um novo vídeo.
* GET /api/videos/top - Lista os 10 vídeos mais assistidos (usa índice).
* GET /api/videos/category/:category - Lista vídeos por categoria (usa índice).

### Histórico
* POST /api/history - Registra uma visualização (incrementa views e recalcula nota média).
* GET /api/users/:userId/history - Busca o histórico completo de um usuário com detalhes do vídeo.
