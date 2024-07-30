import express from 'express';
import index from './routes/index.js';
import mongoose from 'mongoose';

// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/restapis');

//Crear el servidor
const app = express();

// Rutas de la app
app.use('/', index);

const port = 5000;

// Puerto
app.listen(port, () => {
    console.log('Servicio habilitado');
});
