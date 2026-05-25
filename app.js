const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Cloud Computing. Esto es laboratorio 4. !');
});

app.get('/suma/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send(`La suma es: ${a + b}`);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});