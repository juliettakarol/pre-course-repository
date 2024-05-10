import { subcribe, unsubcribe} from './data/data.js'
import { Game } from './components/game.component.js'


function rerender(e){
    const rootElement = document.querySelector('#root')
    rootElement.innerHTML = ''
    const game = Game()
    rootElement.append(game)
}
    
rerender({name: undefined})

subcribe(rerender)

const subscriber = (e)=>{
    console.log(e)
    
}

subcribe(subscriber)


