import{InfoPanel} from './components/InfoPanel/infopanel.js'
import{GridGame} from './components/GridGame/gridgame.js'
import { StartGame, subribe } from './data/data.js'


function GameGoogle(){
    const rootElement = document.querySelector('#root')

    rootElement.append(InfoPanel(),GridGame())

    return rootElement
}

GameGoogle()
subribe(GameGoogle)
StartGame()

