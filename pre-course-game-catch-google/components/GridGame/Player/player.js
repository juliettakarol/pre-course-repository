import { validationPlayerNumber } from "../../../data/data.js"


export function Player(playerNumber){
    validationPlayerNumber(playerNumber)

    const playerElement = document.createElement('img')
    playerElement.src = `../../../asset/img/player${playerNumber}.png`
    playerElement.style.width= '50px'
    return playerElement
}