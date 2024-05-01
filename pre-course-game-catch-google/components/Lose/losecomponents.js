import { playAgain,getCachCount,getMissCount } from "../../data/data.js"

export function Lose(){
    const loseElement = document.createElement('div')

    const loseRezult = document.createElement('p')
    loseRezult.append('YOU LOSE')

    const loseRezultCatch = document.createElement('p')
    loseRezultCatch.append(`Catch: ${getCachCount()}`)

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