// app.js
import express from 'express';
import { StartGame, getHeroysGoogle, getState, getGridSize, getHeroysPlayer1, getHeroysPlayer2, getMissCount, getCachCount } from './data.js';


//запускаем игру
StartGame()


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const coords = getHeroysGoogle()
  res.send(coords);
});


app.get('/getHeroysGoogle', (req, res) => {
  res.send(getHeroysGoogle());
});  

  app.get('/getHeroysPlayer1', (req, res) => {
    res.send(getHeroysPlayer1());
  });  

  app.get('/getHeroysPlayer2', (req, res) => {
    res.send(getHeroysPlayer2());
  });  

  app.get('/getGridSize', (req, res) => {
    res.send(getGridSize());
  });  

  app.get('/getState', (req, res) => {
    res.send({value: getState()});
  });  

  app.get('/getMissCount', (req, res) => {
    res.send({value: getMissCount()});
  }); 
  
  app.get('/getCachCount', (req, res) => {
    res.send({value: getCachCount()});
  });  

   




app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
