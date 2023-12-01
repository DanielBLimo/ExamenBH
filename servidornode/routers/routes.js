//dependenacias y importar el controlador
import express from 'express';
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProdcuto,
  updateProducto,
} from '../controllers/ProdController.js';

const router = express.Router();

router.get('/', getAllProductos);
router.get('/:id', getProdcuto);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/id', deleteProducto);

export default router;
