//dependenacias y importar el controlador
import express from 'express';
import multer from 'multer';
import {
  createProducto,
  deleteProducto,
  getAllImage,
  getAllProductos,
  getProdcuto,
  updateProducto,
} from '../controllers/ProdController.js';

//importamos la función de multer para cargar la imagen y guardarla en el metodo post
import storage from '../config/multer.js';
const uplades = multer({ storage });

const router = express.Router();

router.get('/', getAllProductos); //sin imagenes
router.get('/fotos', getAllImage); //con imagenes
router.get('/:id', getProdcuto);
router.post('/', uplades.single('file'), createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

export default router;
