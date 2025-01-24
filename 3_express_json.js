const express = require('express');
const app = express();
const nigeria = require('./countries/nigeria.json');
const PORT = process.env.PORT ?? 1234;

// Desactivar X-Powered-By
app.disable('x-powered-by');

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Middleware
// Se podría hacer para una url en concreto app.use('/countries/*'(req, res, next)
// Se podria hacer solo para un método app.get((req, res, next)
app.use((req, res, next) => {
  console.log('Mi primer middleware');
  // Trackear la request a la base de datos
  // Revisar si el usuario tiene cookies
  // Importante siempre poner el next ()
  next();
});

app.get('/', (req, res) => {
  // res.status(200).send('<h1>Mi página</h1>');// Normalmente Express detecta el content type
  res.json({
    message: 'Este es el mensaje'
  });
});

app.post('/countries', (req, res) => {
  res.status(201).json(req.body);
});

app.get('/countries/nigeria', (req, res) => {
  res.status(200).json(nigeria);
});

// "use" engloba todos los métodos: GET, POST, PUT, DELETE, etc.
app.use((req, res) => {
  res.status(404).send('404 Not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
