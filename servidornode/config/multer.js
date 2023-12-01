import multer from 'multer';
import path from 'path';

//const para poder utilizar path
const __dirname = path.resolve();

// con multer hacemos que el datos se guarde en una carpeta llamada images
// con un nombre en esoecifico
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'images'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

export default storage;
