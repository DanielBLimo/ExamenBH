import './App.css';
//importamos los componentes
import CompShowProd from './producto/ShowProd.js';
import CompEditProd from './producto/EditProd.js';
import CompCreateProd from './producto/CreateProd.js';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <a href='#!' className='navbar-brand'>
            Tienda BH
          </a>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowProd />} />
          <Route path='/create' element={<CompCreateProd />} />
          <Route path='/edit/:idProd' element={<CompEditProd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
