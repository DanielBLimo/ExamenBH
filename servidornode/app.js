////dependenacias, el route y conexion a la bd
import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import prodRoutes from './routers/routes.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/producto', prodRoutes);

//cargamos la dependencia path para que al cargar crea la carpeta y la hace estatica
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dbimages')));

//try para checar si la conexion fue exitosa
try {
  await db.authenticate();
  console.log('Exito');
} catch (error) {
  console.log('Error: ${error}');
}

app.get('/', (req, res) => {
  res.send('HOLA Mundo');
});

//puerto del servidor
app.listen(8000, () => {
  console.log('Server en http://localhost:8000/');
});
