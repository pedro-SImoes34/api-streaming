const express = require('express');
// Importe as rotas aqui (ex: const historyRoutes = require('./routes/historyRoutes');)

const app = express();
app.use(express.json());

// app.use('/api/history', historyRoutes);
// app.use('/api/videos', videoRoutes);
// app.use('/api/users', userRoutes);

module.exports = app;