

export function Player(playerNumber){
if (![1,2].some(number=> number===playerNumber)){
    throw new Error('Incorrect player number')
}

    const playerElement = document.createElement('img')
    playerElement.src = `../../../asset/img/player${playerNumber}.png`
    playerElement.style.width= '50px'
    return playerElement
}