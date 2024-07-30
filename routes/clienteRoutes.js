import express from 'express';
import {
    nuevoCliente,
    mostrarClientes,
    mostrarCliente,
    actualizarCliente,
    eliminarCliente,
} from '../controllers/clienteController.js';
const router = express.Router();

// REST API da los lineamientos para llamar las URL's
// Agrega clientes via POST -- Para enviar datos al servidor
router.post('/clientes', nuevoCliente);

// Obtener todos los cilentes
router.get('/clientes', mostrarClientes);

// Muestra un cliente en específico
router.get('/clientes/:idCliente', mostrarCliente);

// Actualizar un cliente por id
router.put('/clientes/:idCliente', actualizarCliente);

// Eliminar un cliente por id
router.delete('/clientes/:idCliente', eliminarCliente);

export default router;
// };
