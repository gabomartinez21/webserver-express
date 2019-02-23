const express = require('express');
const app = express();//declara una variable para poder utilizar express como nosotros queramos
const hbs = require('hbs');
//Un middlewear es una instruccion que s ele realiza al servidor que no importa lo que coloquen es lo que debe mostrar
require('./hbs/helpers');


//obtner el puerto de heroku
const port = process.env.PORT || 3000;


app.use(express.static( __dirname + '/public' ))

//Express HBS
//de esta manera le decimos al hbs que vana  estar todos mis parciales
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');




//Luego aqui configuramos que todas las peticiones que entren con '/' realicen esta funcion

app.get('/', function (req, res) {

     // let salida = {
     //      nombre: 'gabriel',
     //      edad: 23,
     //      url: req.url
     // };

//   res.send(salida)
     res.render('home',{
          nombre:'Gabriel'
     })
})

app.get('/about', function (req, res) {

//   res.send(salida)
     res.render('about')
})
 
app.listen(port, () => {
     console.log(`Escuchando en el puerto ${port}`);
})