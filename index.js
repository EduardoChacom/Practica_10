const express = require('express') //Importamos la dependencia.
const app = express() //Declaramos una App de Express

const port = process.env.Port || 3000;
//Setteamos el puerto para que escuche el servidor.

//Primera Route (Está al nivel de la raiz "/"), Hello word!
app.get('/', (req, res) => {
  res.send(`<html></head><body><h1>Hello world!</h1></body></html>`);
});

//Segunda ruta /api, regresa un objeto JSON
app.get('/api', (req, res) => {
  res.json({firstname: 'Alejandro', lastname: 'Chacón'});
});

//Tercera Route, recibe un parametro
app.get('/person/:id', (req, res) => {
  res.send(`<html></head><body><h1>Person: ` + req.params.id +`</h1></body></html>`);
});

//Es el canal en el que se escucha.
app.listen(3000);