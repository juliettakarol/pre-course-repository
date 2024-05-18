import { EVENTS, subcribe} from './data/data.proxy.js'
import { Game } from './components/game.component.js'


export async function rerender(e){
    if(e.name === EVENTS.STATES_CHANGE){
        const rootElement = document.querySelector('#root')
        rootElement.innerHTML = ''
        const game = await Game()
        rootElement.append(game)
    }

    }
    
rerender({name: EVENTS.STATES_CHANGE})

subcribe(rerender)

const subscriber = (e)=>{
    console.log(e)
    
}

subcribe(subscriber)


