import { getCachCount, getMissCount } from "../../data/data.js"


export function InfoPanel(){
    const panelElement = document.createElement('div')
    panelElement.append(`Catch Player1: ${getCachCount().player1}, Player2: ${getCachCount().player2}, Miss: ${getMissCount()}`)
    return panelElement
}