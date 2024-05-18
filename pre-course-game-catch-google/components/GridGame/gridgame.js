import { getGridSize } from "../../data/data.proxy.js";
import { Cell } from "./Cell/Cell.js";

export async function GridGame(){
    const gridElement = document.createElement('table')
    const gridSize = await getGridSize()

    for (let y = 0; y < gridSize.y; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.x; x++) {
            const ceilElement = Cell(x,y)

            rowElement.append(ceilElement)
            
        }
        gridElement.append(rowElement)
    }
    
    return gridElement
}

