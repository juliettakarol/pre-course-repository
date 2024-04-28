import { getGridSize, getHeroysGoogle } from "../../data/data.js";
import { Google } from "./Google/google.js";

export function GridGame(){
    const gridElement = document.createElement('table')
    const gridSize = getGridSize()

    for (let y = 0; y < gridSize.y; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.x; x++) {
            const ceilElement = document.createElement('td');
            ceilElement.append(`${x},${y}`)

            if(getHeroysGoogle().x === x && getHeroysGoogle().y === y){
                ceilElement.append(Google())
            }


            rowElement.append(ceilElement)
            
        }
        gridElement.append(rowElement)
    }
    



    return gridElement
}