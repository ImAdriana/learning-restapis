import Productos from '../models/Productos.js';
import multer from 'multer'; // Permite subir archivos en node
import shortid from 'shortid';
import path from 'path';
import { fileURLToPath } from 'url';
import { nextTick } from 'process';

// Obtén __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '../../uploads/');
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        cb(null, `${shortid.generate()}.${extension}`);
    },
});

const configuracionMulter = {
    storage: fileStorage,
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato no válido'));
        }
    },
};

// Pasar la configuración y el campo
const upload = multer(configuracionMulter).single('imagen');

// Sube un archivo
const subirArchivo = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mensaje: error });
        }
        return next();
    });
};

// Agrega nuevos productos
const agregarProducto = async (req, res, next) => {
    const producto = new Productos(req.body);
    try {
        if (req.file.filename) {
            producto.imagen = req.file.filename;
        }
        await producto.save();
        res.json({ mensaje: 'Producto agregado exitosamente' });
    } catch (error) {
        console.log(error);
        next();
    }
};

// Mostrar todos los productos
const mostrarProductos = async (req, res, next) => {
    try {
        // Obtener productos
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
};

export { agregarProducto, subirArchivo, mostrarProductos };
