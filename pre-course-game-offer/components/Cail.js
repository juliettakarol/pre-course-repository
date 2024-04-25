import { OFFER_STATUS, data } from "../data/game.data.js";

export function Cail(x,y){
    const columnsElement = document.createElement('td');
    const imageElement = document.createElement('img')

    if(x === data.coords.current.x && y === data.coords.current.y){
        imageElement.src = '../asset/image/simply-offer.png'
        columnsElement.append(imageElement)
    }

    if(data.status === OFFER_STATUS.catch && x === data.coords.catch.x && y === data.coords.catch.y){
        imageElement.src = '../asset/image/catch-offer.png'
        columnsElement.append(imageElement)
    }

    if(data.status === OFFER_STATUS.miss && x === data.coords.missed.x && y === data.coords.missed.y){
        imageElement.src = '../asset/image/missed-offer.png'
        columnsElement.append(imageElement)
    }
    
    return columnsElement
}