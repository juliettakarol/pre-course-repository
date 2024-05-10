import { subcribe} from './data/data.js'
import { Game } from './components/game.component.js'


function rerender(){
    const rootElement = document.querySelector('#root')
    rootElement.innerHTML = ''
    const game = Game()
    rootElement.append(game)
}
    
rerender()

subcribe(rerender)

subcribe(()=>{console.log('dddd')})

