//importamos el modelo
import ProductoModel from '../models/ProdModel.js';
import path from 'path';
import fs from 'fs';

//Const para usar la dependencia path
const __dirname = path.resolve();
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

//mostrar todas las fotos
export const getAllImage = async (req, res) => {
  try {
    //traemos los datos y los guardamos em prdoctos para despues mapearlos y guardalos en ima, ademas crear una nueva carpetas donde los ponemos con su id + .png pra tomarlos depues
    const prdoctos = await ProductoModel.findAll();
    prdoctos.map((img) => {
      fs.writeFileSync(
        path.join(__dirname, 'dbimages/' + img.id + '.png'),
        img.imagen
      );
    });
    const imagedir = fs.readdirSync(path.join(__dirname, 'dbimages/'));

    res.json(imagedir);
    console.log(imagedir);
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
  const { body, file } = req;
  if (file) {
    //guardamos la imagen en la carperta images ademas de poner el nombre en data
    const data = fs.readFileSync(
      path.join(__dirname, 'images/' + req.file.filename)
    );
    try {
      console.log(file);
      console.log(req.body);
      console.log(data);
      //guardamos los datos
      await ProductoModel.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: data,
      });
      res.json({
        message: 'Registro creado',
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
};
//actualizar
export const updateProducto = async (req, res) => {
  try {
    await ProductoModel.update(req.body, {
      where: { id: req.params.id },
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
    //sirve para eliminar la imagen de la carpeta dbimages
    fs.unlinkSync(path.join(__dirname, 'dbimages/' + req.params.id + '.png'));
    res.json({
      message: 'Registro eliminado',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
