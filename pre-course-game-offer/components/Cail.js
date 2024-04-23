import { data } from "../data/game.data.js";

export function Cail(x,y){
    const columnsElement = document.createElement('td');
    const imageElement = document.createElement('img')

    if(x===data.coords.current.x && y===data.coords.current.y){
        imageElement.src = '../asset/image/simply-offer.png'
        columnsElement.append(imageElement)
    }

    if(x===data.coords.catch.x && y===data.coords.catch.y){
        imageElement.src = '../asset/image/catch-offer.png'
        columnsElement.append(imageElement)
    }

    if(x===data.coords.missed.x && y===data.coords.missed.y){
        imageElement.src = '../asset/image/missed-offer.png'
        columnsElement.append(imageElement)
    }
    
    return columnsElement
}