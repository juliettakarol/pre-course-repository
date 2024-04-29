import { playAgain } from "../../data/data.js"

export function Win(){
    const winElement = document.createElement('div')
    winElement.append('YOU WIN')
    const playAgainButton = document.createElement('button')
    playAgainButton.append('Play again')
    playAgainButton.addEventListener('click',()=>{
        playAgain()
    })
    winElement.append(playAgainButton)

    return winElement
}