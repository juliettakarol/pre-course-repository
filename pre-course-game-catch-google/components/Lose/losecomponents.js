import { playAgain,getCachCount,getMissCount } from "../../data/data.proxy.js"

export function Lose(){
    const loseElement = document.createElement('div')

    const loseRezult = document.createElement('p')
    loseRezult.append('YOU LOSE')

    const loseRezultCatch = document.createElement('p')
    loseRezultCatch.append(`Catch Player1: ${getCachCount().player1}, Player2${getCachCount().player2}`)

    const loseRezultMiss = document.createElement('p')
    loseRezultMiss.append(`Catch: ${getMissCount()}`)


    const playAgainButton = document.createElement('button')
    playAgainButton.append('Play again')
    playAgainButton.addEventListener('click',()=>{
        playAgain()
    })

    loseElement.append(loseRezult, loseRezultCatch, loseRezultMiss, playAgainButton)

    return loseElement
}