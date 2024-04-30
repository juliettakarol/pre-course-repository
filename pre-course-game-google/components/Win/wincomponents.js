import { getCachCount, getMissCount, playAgain } from "../../data/data.js"

export function Win(){
    
    const winElement = document.createElement('div')

    const winRezult = document.createElement('p')
    winRezult.append('YOU WIN')

    const winRezultCatch = document.createElement('p')
    winRezultCatch.append(`Catch: ${getCachCount()}`)

    const winRezultMiss = document.createElement('p')
    winRezultMiss.append(`Catch: ${getMissCount()}`)


    const playAgainButton = document.createElement('button')
    playAgainButton.append('Play again')
    playAgainButton.addEventListener('click',()=>{
        playAgain()
    })

    winElement.append(winRezult, winRezultCatch, winRezultMiss, playAgainButton)




    return winElement
}