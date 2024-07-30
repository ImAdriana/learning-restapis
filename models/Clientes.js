import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const clientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    apellido: {
        type: String,
        trim: true,
    },
    empresa: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true, // Evita que se capture en mayusculas
        trim: true,
    },
    telefono: {
        type: String,
        trim: true,
    },
});

// Exportar el modelo
module.exports = mongoose.model('Clientes', clientesSchema);
