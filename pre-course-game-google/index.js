import{InfoPanel} from './components/InfoPanel/infopanel.js'
import{GridGame} from './components/GridGame/gridgame.js'
import {STATES, StartGame, addEventListener, getState} from './data/data.js'
import { Settings } from './components/Settings/settingscomponents.js'
import { Win } from './components/Win/wincomponents.js'
import { Lose } from './components/Lose/losecomponents.js'


function rerender(){
    const rootElement = document.querySelector('#root')
    rootElement.innerHTML = ''
    const gameState = getState()

switch(gameState){
    case STATES.IN_PROGRESS:
        rootElement.append(InfoPanel(),GridGame()) ;
        break;
    
    case STATES.SETTINS:
        rootElement.append(Settings());
        break;

    case STATES.WIN:
    rootElement.append(Win());
    break;

    case STATES.LOSE:
    rootElement.append(Lose());
    break;

    default: {
        throw new Error('Not supported state');
    }   
  
}

    
    
}

rerender()

addEventListener(rerender)

