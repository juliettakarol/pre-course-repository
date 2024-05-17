// app.js
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Привет, мир! Это простой ендпоинт на Express! 🚀');
});


app.get('/settings', (req, res) => {
    res.send({mode:'Multaplayer '});
  });  

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
