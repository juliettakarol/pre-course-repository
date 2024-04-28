import{InfoPanel} from './components/InfoPanel/infopanel.js'
import{GridGame} from './components/GridGame/gridgame.js'
import { StartGame, addEventListener } from './data/data.js'


function rerender(){
    const rootElement = document.querySelector('#root')
    rootElement.innerHTML = ''

    rootElement.append(InfoPanel(),GridGame())

    return rootElement
}

rerender()


StartGame()

document.addEventListener('click', ()=>{})

addEventListener(rerender)

