import { getCachCount, getMissCount } from "../../data/data.js"


export function InfoPanel(){
    const panelElement = document.createElement('div')
    panelElement.append(`Catch: ${getCachCount()}, Miss: ${getMissCount()}`)
    return panelElement
}