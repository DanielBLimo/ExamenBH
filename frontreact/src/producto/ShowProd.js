import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//url del servidor
const URI = 'http://localhost:8000/producto/';

const CompShowProd = () => {
  //sirve para guardar los datos que se traen desde el metodo getProd
  const [producto, SetProducto] = useState([]);

  //cargar los productos o actualizar cada que  entra
  useEffect(() => {
    getProd();
  }, []);

  //procedimineto para mostrar todos los productos
  const getProd = async () => {
    const res = await axios.get(URI);
    SetProducto(res.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link className='btn btn-primary mt-2 mb-2'>
            <i className='fas fa-plus'></i>
          </Link>
          <table class='table'>
            <thead className='table-primary'>
              <tr>
                <th>Nombre del Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {producto.map((producto) => (
                <tr key={producto.id}>
                  <td> {producto.nombre} </td>
                  <td> {producto.precio} </td>
                  <td>
                    <Link className='btn btn-info'>
                      <i className='fas fa-edit'></i>
                    </Link>
                    <button className='btn btn-danger'>
                      <i className='fas fa-trash-alt'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowProd;
