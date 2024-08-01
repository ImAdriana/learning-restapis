import express from 'express';
import {
    nuevoCliente,
    mostrarClientes,
    mostrarCliente,
    actualizarCliente,
    eliminarCliente,
} from '../controllers/clienteController.js';

import {
    agregarProducto,
    subirArchivo,
    mostrarProductos,
    mostrarProducto,
    actualizarProducto,
    eliminarProducto,
} from '../controllers/productoController.js';
const router = express.Router();

// REST API da los lineamientos para llamar las URL's

/** CLIENTES */
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

/** PRODUCTOS */
// Agregar nuevos productos
router.post('/productos', subirArchivo, agregarProducto);

// Muestra todos los productos
router.get('/productos', mostrarProductos);

// Muestra un producto en específico
router.get('/productos/:idProducto', mostrarProducto);

// Actualiza un producto mediante su id
router.put('/productos/:idProducto', subirArchivo, actualizarProducto);

// Eliminar producto
router.delete('/productos/:idProducto', eliminarProducto);

export default router;
// };
