export const STATES = {
    SETTINS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose',
}



const _data = {
    settings: {
        gridSize:{
            x: 3,
            y: 3,
        },
        pointsToWin:5,
        pointsToLose:5,
    },
    caught: 0,
    miss: 0,
    game_status: 'settings',
    timeGame: new Date(),
    heroes:{
        google: {
            x: 0,
            y: 2,
        },
        player1: {
            x: 1,
            y: 1,
        },
        player2: {
            x: 2,
            y: 2,
        },
    }
}




let observer = function (){
}

export function addEventListener(subscribe){
    observer = subscribe
}


export function playAgain(){
    
    _data.caught = 0
    _data.miss = 0 
    _data.game_status = STATES.SETTINS
    observer()
}

let jumpInterval

function runJumpInterval(){
    jumpInterval = setInterval( ()=>{
        changeCoordsGoogle()
        _data.miss++
        if(_data.settings.pointsToLose === _data.miss){
            stopJumpInterval()
            _data.game_status = STATES.LOSE
         }
        
        observer()
    },2000)
}

function stopJumpInterval(){
    clearInterval(jumpInterval)
}

export function StartGame(){
    if( _data.game_status !== STATES.SETTINS){
        throw new Error('Game cannot be started from state' +_data.game_status)
    }

    _data.game_status = STATES.IN_PROGRESS
    runJumpInterval()
    observer()
}

function changeCoordsGoogle(){
    let newX
    let newY
    do {
        newX = getRandomInteger(_data.settings.gridSize.x-1)
        newY = getRandomInteger(_data.settings.gridSize.y-1)

    }
    while (
        newX === _data.heroes.google.x && newY === _data.heroes.google.y
    )
    _data.heroes.google.x = newX
    _data.heroes.google.y = newY
    
}


function getRandomInteger(n) {
    return Math.floor(Math.random() * (n + 1));
      }


export function cathGoogle(){
    stopJumpInterval()
    if(_data.settings.pointsToWin === _data.caught){
        return
    }
     _data.caught++
     

     if(_data.settings.pointsToWin === _data.caught){
        _data.game_status = STATES.WIN
     } else {
        changeCoordsGoogle()
        runJumpInterval()
       
     } observer()
     
}




//setter

export function setGridSize(anyX, anyY){
    if (anyX<1) throw new Error ('Incorrect x')
    if (anyY<1) throw new Error ('Incorrect y')
    _data.settings.gridSize.x = anyX
    _data.settings.gridSize.y = anyY
  
}
 

//getter
export function getGridSize(){
    return {..._data.settings.gridSize}
}

export function getHeroysGoogle(){
    return {..._data.heroes.google}
    }

/**
 * 
 * @returns количество баллов
 */
export function getCachCount(){
    return _data.caught
}


export function getMissCount(){
    return _data.miss
}

export function getState(){
    return _data.game_status
}