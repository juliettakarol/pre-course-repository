import { Game } from "./components/game.js"

function renderGame(){
    const gameElement = Game()
    document.body.innerHTML = ''
    document.body.append(gameElement)   
}

renderGame()