const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo! Este es mi servidor en el puerto 8000.');
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});