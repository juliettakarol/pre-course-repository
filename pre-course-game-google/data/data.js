
const _data = {
    settings: {
        gridSize:{
            x: 3,
            y: 3,
        },
    },
    caught: 0,
    timeGame: new Date(),
    heroes:{
        google: {
            x: 0,
            y: 2,
        },
        player1: {},
        player2: {},
    }

}


let subribes = function (){

}

export function subribe(anySu){
    subribes = anySu
}

export function StartGame(){
    setInterval( changeCoordsGoogle,2000)
}

function changeCoordsGoogle(){
    new x = getRandomInteger(_data.settings.gridSizen.x)
    new y = getRandomInteger(_data.settings.gridSizen.x)
     
    
    
    _data.heroes.google.x = x
    _data.heroes.google.y = y
}


function getRandomInteger(n) {
    return Math.floor(Math.random() * (n + 1));
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




