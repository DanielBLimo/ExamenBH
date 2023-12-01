import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/producto/';

const CompCreateProd = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  //procedimiento guardar
  const store = async (e) => {
    if (file === '') {
      alert('ERROR no se agrego la imagen');
      return;
    }
    //creamos un data para guardar los datos
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('nombre', nombre);
    formdata.append('precio', precio);

    fetch(URI, {
      method: 'POST',
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    navigate('/');
    alert('Datos agregados con exito');
  };

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  return (
    <div>
      <h3>Agregar Producto</h3>
      <form onSubmit={store}>
        <div className='container mt-5'>
          <div className='card p-3'>
            <div className='row'>
              <div className='col-12'>
                <div className='mb-3'>
                  <label className='form-label'>Nombre del producto</label>
                  <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Precio</label>
                  <input
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    type='number'
                    className='form-control'
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Imagén del producto</label>
                  <input
                    id='fileinput'
                    onChange={selectedHandler}
                    className='form-control'
                    type='file'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-primary'>
            Subir
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompCreateProd;
