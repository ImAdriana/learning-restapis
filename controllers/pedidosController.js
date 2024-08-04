import { json } from 'express';
import Pedidos from '../models/Pedidos.js';

// Crear un nuevo pedido
/** Probarlo de esta manera en POSTMAN ---> Body -- raw -- opcion JSON
 * {
    "cliente": "66a88b965c29bae841aa16f8",
    "pedido": [
        {"producto": "66a999f3ec90b3f78ae925e0", "cantidad": 3},
        {"producto": "66a999c4ec90b3f78ae925dc", "cantidad": 1}

    ],
    "total": "100.51"
}*/
const nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body); // La información que se coloque mediante POSTMAN
    try {
        await pedido.save(); //Para almacenarlo en la BD
        res.json({ mensaje: 'Nuevo pedido creado' });
    } catch (error) {
        console.log(error);
        next();
    }
};

// Aquí mongoose permite relacionar una coleción con otra
const mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto', // Dónde va a encontrar la referencia
            model: 'Productos', // Verificar en cómo se tiene en la referencia del modelo
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
};

const mostrarPedido = async (req, res, next) => {
    try {
        const pedido = await Pedidos.findById(req.params.idPedido)
            .populate('cliente')
            .populate({
                path: 'pedido.producto', // Dónde va a encontrar la referencia
                model: 'Productos', // Verificar en cómo se tiene en la referencia del modelo
            });
        res.json(pedido);
    } catch (error) {
        res.json({ mensaje: 'No existe ese pedido' });
        next();
    }
};

const actualizarPedido = async (req, res, next) => {
    try {
        const pedido = await Pedidos.findOneAndUpdate(
            {
                _id: req.params.idPedido,
            },
            req.body,
            {
                new: true,
            }
        )
            .populate('cliente')
            .populate({
                path: 'pedido.producto', // Dónde va a encontrar la referencia
                model: 'Productos', // Verificar en cómo se tiene en la referencia del modelo
            });
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
};

const eliminarPedido = async (req, res, next) => {
    try {
        await Pedidos.findOneAndDelete({
            _id: req.params.idPedido,
        });
        res.json({ mensaje: 'Pedido eliminado' });
    } catch (error) {
        res.json({ mensaje: 'Pedido no reconcido' });
        next();
    }
};
export {
    nuevoPedido,
    mostrarPedidos,
    mostrarPedido,
    actualizarPedido,
    eliminarPedido,
};
