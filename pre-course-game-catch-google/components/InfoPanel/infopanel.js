import { EVENTS, getCachCount, getMissCount, subcribe } from "../../data/data.js"


export function InfoPanel(){

    function rerenderInfoPanel(){
        panelElement.innerHTML=''
        panelElement.append(`Catch Player1: ${getCachCount().player1}, Player2: ${getCachCount().player2}, Miss: ${getMissCount()}`)
    }

    subcribe((e)=> {
        if(e.name = EVENTS.CATCH_CHANGE){
            rerenderInfoPanel()
        }
    })
    const panelElement = document.createElement('div')
    rerenderInfoPanel()
    
    return panelElement
}