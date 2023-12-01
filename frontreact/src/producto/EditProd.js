import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/producto/';

const CompEditProd = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      precio: precio,
    });
    navigate('/');
    alert('Datos actualizados con exito');
  };

  useEffect(() => {
    getProdById();
  }, []);

  const getProdById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setPrecio(res.data.precio);
  };

  return (
    <div>
      <h3>Editar Producto</h3>
      <form onSubmit={update}>
        <div className='container mt-5'>
          <div className='card p-3'>
            <div className='row'>
              <div className='col-12'>
                <div className='mb-3'>
                  <label className='form-label'>Nombre</label>
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
              </div>
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Acpetar
        </button>
      </form>
    </div>
  );
};

export default CompEditProd;
