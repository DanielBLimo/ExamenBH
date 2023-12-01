//importamos el modelo
import ProductoModel from '../models/ProdModel.js';

/*Metodo CRUD*/
//Mostrar todos los datos
export const getAllProductos = async (req, res) => {
  try {
    const prdoctos = await ProductoModel.findAll();
    res.json(prdoctos);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//mostrar solo uno
export const getProdcuto = async (req, res) => {
  try {
    const prod = await ProductoModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(prod[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//crear
export const createProducto = async (req, res) => {
  try {
    await ProductoModel.create(req.body);
    res.json({
      message: 'Registro creado',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//actualizar
export const updateProducto = async (req, res) => {
  try {
    await ProductoModel.update(req.body, {
      where: { idProd: req.params.idProd },
    });
    res.json({
      message: 'Registro actualizado',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//eliminar
export const deleteProducto = async (req, res) => {
  try {
    await ProductoModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: 'Registro eliminado',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
