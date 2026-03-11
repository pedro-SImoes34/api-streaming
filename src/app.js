const express = require('express');

const userRoutes = require('./routes/userRoutes');
const videoRoutes = require('./routes/videoRoutes');
const historyRoutes = require('./routes/historyRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/history', historyRoutes);

module.exports = app;