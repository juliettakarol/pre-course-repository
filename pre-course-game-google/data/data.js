
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
        google: {},
        player1: {},
        player2: {},
    }

}


export function getGridSize(){
return {..._data.settings.gridSize}
}