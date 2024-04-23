import { Cail } from "./Cail.js"


export function Grid(settingsSize){
    const container = document.createElement('table')
    
    for (let y = 0; y < settingsSize.rows; y++) {
        const rowsElement = document.createElement('tr')

        for (let x = 0; x < settingsSize.columns; x++) {
            const columnsElement = Cail(x,y)
            rowsElement.append(columnsElement)
         }
         container.append(rowsElement)
        }

    return container

}