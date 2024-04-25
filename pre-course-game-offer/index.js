import { Game } from "./components/game.js"
import { subsrube } from "./data/game.data.js"


subsrube(renderGame)

function renderGame(){
    document.body.innerHTML = ''
    const gameElement = Game()
    document.body.append(gameElement)   
}

renderGame()


