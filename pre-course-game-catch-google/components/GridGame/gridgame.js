import { getGridSize, getHeroysGoogle, getHeroysPlayer1, getHeroysPlayer2 } from "../../data/data.js";
import { Google } from "./Google/google.js";
import { Player } from "./Player/player.js";

export function GridGame(){
    const gridElement = document.createElement('table')
    const gridSize = getGridSize()

    for (let y = 0; y < gridSize.y; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.x; x++) {
            const ceilElement = document.createElement('td');
            // ceilElement.append(`${x},${y}`)

            if(getHeroysGoogle().x === x && getHeroysGoogle().y === y){
                ceilElement.append(Google())
            }

            if(getHeroysPlayer1().x === x && getHeroysPlayer1().y === y){
                ceilElement.append(Player(1))
            }

            if(getHeroysPlayer2().x === x && getHeroysPlayer2().y === y){
                ceilElement.append(Player(2))
            }


            rowElement.append(ceilElement)
            
        }
        gridElement.append(rowElement)
    }
    



    return gridElement
}