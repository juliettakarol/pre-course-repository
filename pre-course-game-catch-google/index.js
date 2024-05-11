import { EVENTS, subcribe} from './data/data.js'
import { Game } from './components/game.component.js'


function rerender(e){
    if(e.name === EVENTS.STATES_CHANGE){
        const rootElement = document.querySelector('#root')
        rootElement.innerHTML = ''
        const game = Game()
        rootElement.append(game)
    }

    }
    
rerender({name: EVENTS.STATES_CHANGE})

subcribe(rerender)

const subscriber = (e)=>{
    console.log(e)
    
}

subcribe(subscriber)


