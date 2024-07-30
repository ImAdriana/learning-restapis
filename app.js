import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import mongoose from 'mongoose';

// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/restapis');

//Crear el servidor
const app = express();

// Habilitar bodyparser
// Para poder leer los valores que se pasen por postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la app
app.use('/', clienteRoutes);

const port = 5000;

// Puerto
app.listen(port, () => {
    console.log('Servicio habilitado');
});
