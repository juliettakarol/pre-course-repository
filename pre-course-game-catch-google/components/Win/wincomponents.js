import { getCachCount, getMissCount, playAgain } from "../../data/data.proxy.js"

export function Win(){
    
    const winElement = document.createElement('div')

    const winRezult = document.createElement('p')
    winRezult.append('YOU WIN')

    const winRezultCatchPlayer1 = document.createElement('p')
    winRezultCatchPlayer1.append(`Catch Player1: ${getCachCount().player1}`)

    const winRezultCatchPlayer2 = document.createElement('p')
    winRezultCatchPlayer2.append(`Catch Player2: ${getCachCount().player2}`)


    const winRezultMiss = document.createElement('p')
    winRezultMiss.append(`Miss: ${getMissCount()}`)


    const playAgainButton = document.createElement('button')
    playAgainButton.append('Play again')
    playAgainButton.addEventListener('click',()=>{
        playAgain()
    })

    winElement.append(winRezult, winRezultCatchPlayer1, winRezultCatchPlayer2, winRezultMiss, playAgainButton)

    return winElement
}