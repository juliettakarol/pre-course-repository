import { EVENTS, getCachCount, getMissCount, subcribe } from "../../data/data.proxy.js"


export function InfoPanel(){

    async function rerenderInfoPanel(){
        const catchCount = await getCachCount()
        const missCount = await getMissCount()


        panelElement.innerHTML=''
        panelElement.append(`Catch Player1: ${catchCount.player1}, Player2: ${catchCount.player2}, Miss: ${missCount}`)
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