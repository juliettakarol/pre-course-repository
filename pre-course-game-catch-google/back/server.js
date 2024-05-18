// app.js
import express from 'express';
import cors from 'cors';
import { StartGame, getHeroysGoogle, getState, getGridSize, getHeroysPlayer1, getHeroysPlayer2, getMissCount, getCachCount, playAgain, movePlayer, setGridSize, subcribe, unsubcribe } from './data.js';



const app = express();
app.use(cors())
app.use(express.json())

const port = 3000;


app.put('/movePlayer', (req, res) => {
  movePlayer(req.body.playerNumber, req.body.direction)
  res.send(200);
}); 


app.put('/setGridSize', (req, res) => {
  setGridSize(req.body.x, req.body.y)
  res.send(200);
});  

app.put('/StartGame', (req, res) => {
  StartGame()
  res.send(200);
});  

app.put('/playAgain', (req, res) => {
  playAgain()
  res.send(200);
});  


app.get('/events', (req, res) => {

  res.header('Content-Type', 'text/event-stream')
  res.header('Cache-Control', 'no-cache')
  res.header('Connection', 'kep-alive')


  const handler = (event) => {
    res.write(`data: ${JSON.stringify(event)}\n\n`)
  }

  subcribe(handler)
  req.on('close', () => {
        unsubcribe(handler)
        res.end()
      })
  
})

// app.get('/events', (req, res) => {
//   const sendEvent = ()=>{
//     const data = new Date().toLocaleTimeString()
//     res.write(`data: ${data}\n\n`)
//   }

//   sendEvent()
//   const intervalId = setInterval(sendEvent, 1000)

//   req.on('close'. () => {
//     clearInterval(intervalId)
//     res.end()
//   })
//   })




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
    res.send({value:getMissCount()});
  }); 
  
  app.get('/getCachCount', (req, res) => {
    res.send(getCachCount());
  });  

   




app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
