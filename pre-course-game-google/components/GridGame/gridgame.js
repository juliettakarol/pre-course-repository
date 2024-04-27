import { getGridSize } from "../../data/data.js";

export function GridGame(){
    const gridElement = document.createElement('table')
    const gridSize = getGridSize()

    for (let y = 0; y < gridSize.y; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.x; x++) {
            const ceilElement = document.createElement('td');
            ceilElement.append(`${x},${y}`)
            rowElement.append(ceilElement)
            
        }
        gridElement.append(rowElement)
    }
    



    return gridElement
}