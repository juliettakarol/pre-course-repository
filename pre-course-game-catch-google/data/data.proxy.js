export const EVENTS = {
    GOOGLE_JUMP:'GOOGLE_JUMP',
    PLAYER1_MOVE:'PLAYER1_MOVE',
    PLAYER2_MOVE:'PLAYER2_MOVE',
    STATES_CHANGE:'STATES_CHANGE',
    CATCH_CHANGE:'CATCH_CHANGE',
}


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

export const OPTIONS = {
    gridSize:[   
        {x: 3,y: 3,},
        {x: 4,y: 4,},
        {x: 5,y: 5,},
        {x: 6,y: 6,},
        {x: 7,y: 7,},
    ],
    pointsToWin:[
        10,
        20,
        30
    ],
    maxMissedOption:[
        10,
        20,
        30
    ],
}


let _subscribers = []

export function subcribe(subscriber){
    _subscribers.push(subscriber)  
}

export function unsubcribe(subscriber){
    _subscribers = _subscribers.filter(el => el !== subscriber)
}

function _notify(nameEvent){
    _subscribers.forEach((el) => {
        try {
            const event = {name: nameEvent}
        el(event) 
        }   
        catch(error){
            console.error(error)
        }
    })

}

const evtSource = new EventSource('http://localhost:3000/events')

evtSource.addEventListener('message', (event) => {
    const data = JSON.parse(event.data)
    _notify(data.name)
    console.log(event.data)
})

export function playAgain(){
    fetch('http://localhost:3000/playAgain', {method: 'put'})
}


export function StartGame(){
     fetch('http://localhost:3000/StartGame', {method: 'put'})
}

export function validationPlayerNumber(playerNumber){
   if(![1,2].some(number => number === playerNumber)){
    throw new Error ('incorrect player number')
   }
}

export function movePlayer(playerNumber, direction){
    fetch('http://localhost:3000/movePlayer', 
    {
        method: 'put',
        body: JSON.stringify({playerNumber,direction}),
        headers: {
            'content-type': 'application/json'
    }

    })

}








//setter

export function setGridSize(x, y){
    fetch('http://localhost:3000/setGridSize', 
    {
        method: 'put',
        body: JSON.stringify({x,y}),
        headers: {
            'content-type': 'application/json'
    }
    })
    
}

export function setPointsToWin (anyPoints){
_data.settings.pointsToWin = anyPoints}

export function setPointsToLose(anyPoints){
_data.settings.pointsToLose = anyPoints}
 

//getter
export async function getGridSize(){
    const promise = fetch('http://localhost:3000/getGridSize')
    const response = await promise
    const data = await response.json()
    return data
}

export async function getHeroysGoogle(){
    const promise = fetch('http://localhost:3000/getHeroysGoogle')
    const response = await promise
    const data = await response.json()
    return data
}

export async function getHeroysPlayer1(){
    const promise = fetch('http://localhost:3000/getHeroysPlayer1')
    const response = await promise
    const data = await response.json()
    return data
    }

export async function getHeroysPlayer2(){ 
    const promise = fetch('http://localhost:3000/getHeroysPlayer2')
    const response = await promise
    const data = await response.json()
    return data
    }

/**
 * 
 * @returns количество баллов
 */
export async function getCachCount(){  
    const promise = fetch('http://localhost:3000/getCachCount')
    const response = await promise
    const data = await response.json()
    return data
}

export async function getMissCount(){
    const promise = fetch('http://localhost:3000/getMissCount')
    const response = await promise
    const data = await response.json()
    return data.value
}

export async function getState(){
    const promise = fetch('http://localhost:3000/getState')
    const response = await promise
    const data = await response.json()
    return data.value
}