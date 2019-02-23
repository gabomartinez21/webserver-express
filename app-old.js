const http = require('http');


//Creamos el servidor

http.createServer( (req, res) => {
     

     res.writeHead(200, {'Content-Type': 'application/json'});

     let salida = {
          nombre: 'gabriel',
          edad: 23,
          url: req.url
     };
     res.write(JSON.stringify(salida));
     // res.write('Hola Mundo');

     res.end();


})
.listen(8080, "0.0.0.0");

console.log('Escuchando el puesto 8080');