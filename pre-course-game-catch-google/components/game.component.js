import{InfoPanel} from '../components/InfoPanel/infopanel.js'
import{GridGame} from '../components/GridGame/gridgame.js'
import {GAME_DIRECTION, STATES, getState, movePlayer} from '../data/data.js'
import { Settings } from '../components/Settings/settingscomponents.js'
import { Win } from '../components/Win/wincomponents.js'
import { Lose } from '../components/Lose/losecomponents.js'


document.addEventListener('keyup', (event)=>{
    switch(event.code){
        case 'ArrowLeft':
            movePlayer(1, GAME_DIRECTION.LEFT)
            break;
        case 'ArrowRight':
            movePlayer(1, GAME_DIRECTION.RIGHT)
            break;
        case 'ArrowUp':
            movePlayer(1, GAME_DIRECTION.UP)
        break;
        case 'ArrowDown':
            movePlayer(1, GAME_DIRECTION.DOWN)
        break;


        case 'KeyA':
            movePlayer(2, GAME_DIRECTION.LEFT)
            break;
        case 'KeyD':
            movePlayer(2, GAME_DIRECTION.RIGHT)
            break;
        case 'KeyW':
            movePlayer(2, GAME_DIRECTION.UP)
        break;
        case 'KeyS':
            movePlayer(2, GAME_DIRECTION.DOWN)
        break;
    }
})





export function Game()  {
    const element = document.createElement('div')
    
    const gameState = getState()
switch(gameState){
    case STATES.IN_PROGRESS:
        element.append(InfoPanel(),GridGame()) ;
        break;
    
    case STATES.SETTINS:
        element.append(Settings());
        break;

    case STATES.WIN:
        element.append(Win());
    break;

    case STATES.LOSE:
        element.append(Lose());
    break;

    default: {
        throw new Error('Not supported state');
    }   
  
} 
return element
}