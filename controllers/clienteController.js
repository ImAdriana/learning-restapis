import Clientes from '../models/Clientes.js';

//  Agrega un nuevo cliente

const nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);
    try {
        // Almacenar el registro
        await cliente.save(); // Almacena los clientes en la BD
        res.json({ mensaje: ' Se agregó un nuevo cliente' });
    } catch (error) {
        // Si hay un error
        console.log(error);
        // Que la aplicación no se detenga y se valla al siguiente middleware
        next();
    }
};

// Muestra todos los clientes
const mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes); // Se visualiza a través de postman
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un cliente mediante su ID
const mostrarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findById(req.params.idCliente);
        // Mostrar el cliente
        res.json(cliente);
    } catch (error) {
        res.json({ mensaje: 'No existe el cliente' });
        next();
    }
};

// Actualiza un cliente mediante su ID
const actualizarCliente = async (req, res, next) => {
    try {
        // _id, es como define mongodb el campo id
        const cliente = await Clientes.findOneAndUpdate(
            {
                _id: req.params.idCliente,
            },
            req.body, // Aquí se va a encontrar toda la información donde se va a comparar
            { new: true } // Callback para almacenar el valor nuevo
        );
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Eliminar un registro
const eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({ _id: req.params.idCliente });
        res.json({ mensaje: 'El cliente fue eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
};
export {
    nuevoCliente,
    mostrarClientes,
    mostrarCliente,
    actualizarCliente,
    eliminarCliente,
};
