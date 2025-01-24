const http = require('node:http');
const fs = require('node:fs');

// node --watch 1_http_v2.js para que se actulice automáticamente

// $env:PORT=4000; node 11_http.js
const desiredPort = process.env.PORT ?? 1234;

// Tipos de estatusCode "http.cat" o "https://developer.mozilla.org/es/docs/Web/HTTP/Status/100"
const processRequest = function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Bienvenido a mi página de inicio!</h1>');
  } else if (req.url === '/imagen.jpg') {
    fs.readFile('./HTTP.jpg', (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.end('<h1>500 Internal Server Error</h1>');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        res.end(data);
      }
    });
  } else if (req.url === '/contacto') {
    res.statusCode = 200;
    res.end('<h1>Contacto</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>Error 404 Not Found</h1>');
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Server listenig on port http://localhost:${desiredPort}`);
});

//  server.listen(8080, () => {
//   console.log('Server listenig on port 8080');
// });

// Si ponemos puerto 0 usará el primero disponible
// server.listen(0, () => {
//   console.log(`Server listenig on port http://localhost:${server.address().port}`);
// });
