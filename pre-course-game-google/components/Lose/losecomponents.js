import { playAgain } from "../../data/data.js"

export function Lose(){
    const loseElement = document.createElement('div')
    loseElement.append('YOU LOSE')
    const playAgainButton = document.createElement('button')
    playAgainButton.append('Play again')
    playAgainButton.addEventListener('click',()=>{
        playAgain()
    })
    loseElement.append(playAgainButton)

    return loseElement
}