export const STATES = {
    SETTINS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose',
}

export const GAME_DIRECTION = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
}

const _data = {
    settings: {
        gridSize:{
            x: 5,
            y: 5,
        },
        pointsToWin:10,
        pointsToLose:10,
        jumpInterval: 4000
    },
    caught: {
        player1: 0,
        player2: 0
    },
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
    }, _data.settings.jumpInterval)
}

function stopJumpInterval(){
    clearInterval(jumpInterval)
}

function changeCoordsGoogle(){
    let newX
    let newY
    do {
        newX = getRandomInteger(_data.settings.gridSize.x-1)
        newY = getRandomInteger(_data.settings.gridSize.y-1)

    }
    while (
        (newX === _data.heroes.google.x && newY === _data.heroes.google.y) ||
        (newX === _data.heroes.player1.x && newY === _data.heroes.player1.y) ||
        (newX === _data.heroes.player2.x && newY === _data.heroes.player2.y)
    )
    _data.heroes.google.x = newX
    _data.heroes.google.y = newY
    
}

function getRandomInteger(n) {
    return Math.floor(Math.random() * (n + 1));
      }


function cathGoogle(playerNumber){
    stopJumpInterval()
    
     _data.caught[`player${playerNumber}`]++
     

     if(_data.settings.pointsToWin === _data.caught[`player${playerNumber}`]){
        _data.game_status = STATES.WIN
     } else {
        changeCoordsGoogle()
        runJumpInterval()
       
     } observer()
     
}

function _checkCoordsIsValid(coords){
    const coorectX = coords.x >= 0 && coords.x <= _data.settings.gridSize.x-1
    const coorectY = coords.y >= 0 && coords.y <= _data.settings.gridSize.y-1

    return coorectX && coorectY

}

function _matchCoordsOtherPlayer(coords){
    const player1IsInThisCeil = coords.x === _data.heroes.player1.x && coords.y === _data.heroes.player1.y
    const player2IsInThisCeil = coords.x === _data.heroes.player2.x && coords.y === _data.heroes.player2.y

    return player1IsInThisCeil || player2IsInThisCeil
}

function _matchCoordsGoogle(coords){
    const googleIsInThisCeil = coords.x === _data.heroes.google.x && coords.y === _data.heroes.google.y
    return googleIsInThisCeil
}


export function playAgain(){
    
    _data.caught = 0
    _data.miss = 0 
    _data.game_status = STATES.SETTINS
    observer()
}


export function StartGame(){
    if( _data.game_status !== STATES.SETTINS){
        throw new Error('Game cannot be started from state' +_data.game_status)
    }

    _data.game_status = STATES.IN_PROGRESS
    runJumpInterval()
    observer()
}

export function validationPlayerNumber(playerNumber){
    if (![1,2].some(number=> number===playerNumber)){
        throw new Error('Incorrect player number')
    }
}

export function movePlayer(playerNumber, direction){
    validationPlayerNumber(playerNumber)

    if(_data.game_status !== STATES.IN_PROGRESS){
        return
    }

    const newCoords = {..._data.heroes[`player${playerNumber}`]}
    

    switch (direction) {
        case GAME_DIRECTION.DOWN:
            newCoords.y++
        break;
        case GAME_DIRECTION.UP:
            newCoords.y--
        break;
        case GAME_DIRECTION.RIGHT:
            newCoords.x++
        break;
        case GAME_DIRECTION.LEFT:
            newCoords.x--
        break;
    }
    
    const isValid = _checkCoordsIsValid(newCoords)
    if(!isValid) return

    const isMatchOtherPlayer = _matchCoordsOtherPlayer(newCoords)
    if(isMatchOtherPlayer) return

    const isMatchGoogle = _matchCoordsGoogle(newCoords)
    if(isMatchGoogle){
        cathGoogle(playerNumber)
    }

    _data.heroes[`player${playerNumber}`] = newCoords

    observer()
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

export function getHeroysPlayer1(){
    return {..._data.heroes.player1}
    }

export function getHeroysPlayer2(){
    return {..._data.heroes.player2}
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