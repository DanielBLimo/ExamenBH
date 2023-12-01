import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

//url del servidor
const URI = 'http://localhost:8000/producto/';
const URId = 'http://localhost:8000/';
const URIFOTOS = 'http://localhost:8000/producto/fotos';

const CompShowProd = () => {
  //sirve para guardar los datos que se traen desde el metodo getProd
  const [producto, SetProducto] = useState([]);
  const [actualizar, setActualizar] = useState(true);
  //sirve para guardar las fotos que se traen desde el metodo getImage
  const [imageList, setImagenList] = useState([]);
  //abre modal
  const [modal, setModal] = useState(false);
  const [actual, SetActual] = useState(null);

  //cargar los productos o actualizar cada que  entra
  useEffect(() => {
    ReactModal.setAppElement('body');
    getProd();
    getImage();
    setActualizar(false);
  }, [actualizar]);

  //procedimineto para mostrar todos los productos
  const getProd = async () => {
    const res = await axios.get(URI);
    SetProducto(res.data);
  };

  //procedimineto para mostrar imagenes
  const getImage = async () => {
    const res = await axios.get(URIFOTOS);
    setImagenList(res.data);
  };

  //modal fotos
  const modal1 = (isOpen, actual) => {
    setModal(isOpen);
    const fot = actual + '.png';
    SetActual(fot);
    console.log(actual);
    console.log(imageList);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to='/create' className='btn btn-primary mt-2 mb-2'>
            <i className='fas fa-plus'></i>
          </Link>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>Nombre del Producto</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {producto.map((producto) => (
                <tr key={producto.id}>
                  <td> {producto.nombre} </td>
                  <td> {producto.precio} </td>
                  <td>
                    <button
                      onClick={() => modal1(true, producto.id)}
                      className='btn btn-success'
                    >
                      <i className='fa-solid fa-eye'></i>
                    </button>
                  </td>
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
      <ReactModal
        style={{ content: { right: '30%', left: '30%' } }}
        isOpen={modal}
        onRequestClose={() => setModal(false, null)}
      >
        <div className='card'>
          <img
            src={URId + actual}
            alt='...'
            className='card-img-top'
            style={{ alignContent: 'center' }}
          />
          <div className='card-body'></div>
        </div>
      </ReactModal>
    </div>
  );
};

export default CompShowProd;
