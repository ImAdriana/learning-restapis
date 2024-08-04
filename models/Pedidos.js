import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    // Cada pedido contendrá un cliente
    cliente: {
        // Aquí hace referencia a la colección de cliente
        type: Schema.ObjectId,
        ref: 'Clientes',
    },
    // Un pedido puede tener uno o multiples productos, por eso se almacen en una lista de objetos
    pedido: [
        {
            producto: {
                type: Schema.ObjectId,
                ref: 'Productos',
            },
            cantidad: Number,
        },
    ],
    total: {
        type: Number,
    },
});

// Exportar el modelo
const Pedidos = mongoose.model('Pedidos', pedidosSchema);
export default Pedidos;
