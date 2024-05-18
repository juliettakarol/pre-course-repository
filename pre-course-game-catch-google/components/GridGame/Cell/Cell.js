import { EVENTS, STATES, getHeroysGoogle, getHeroysPlayer1, getHeroysPlayer2, subcribe } from "../../../data/data.proxy.js";
import { Google } from "./Google/google.js";
import { Player } from "./Player/player.js";

const CELL_STATUS = {
    EMPTY: 1,
    GOOGLE: 2,
    PLAYER1: 3,
    PLAYER2: 4,
}

export function Cell(x, y) {

    const state = {
        prevState: CELL_STATUS.EMPTY
    }

    async function rerenderCell() {

        const googleCoords = await getHeroysGoogle()
        const player1Coords = await getHeroysPlayer1()
        const player2Coords = await getHeroysPlayer2()



        console.log(x, y)
        ceilElement.innerHTML = ''
        if (googleCoords.x === x && googleCoords.y === y) {
            ceilElement.append(Google());
            state.prevState = CELL_STATUS.GOOGLE
        } else if (player1Coords.x === x && player1Coords.y === y) {
            ceilElement.append(Player(1));
            state.prevState = CELL_STATUS.PLAYER1
        } else if (player2Coords.x === x && player2Coords.y === y) {
            ceilElement.append(Player(2));
            state.prevState = CELL_STATUS.PLAYER2
        } else {
            state.prevState = CELL_STATUS.EMPTY
        }
    }

    subcribe(async (e) => {
        const googleCoords = await getHeroysGoogle()
        const player1Coords = await getHeroysPlayer1()
        const player2Coords = await getHeroysPlayer2()

        const transitions = {
            [EVENTS.GOOGLE_JUMP]: {
                [CELL_STATUS.GOOGLE]: rerenderCell,
                [CELL_STATUS.EMPTY]: () => {
                    if (googleCoords.x === x && googleCoords.y === y) {
                        rerenderCell()
                    }
                },
            },
            [EVENTS.PLAYER1_MOVE]: {
                [CELL_STATUS.PLAYER1]: rerenderCell,
                [CELL_STATUS.GOOGLE]: () => {
                    if (player1Coords.x === x && player1Coords.y === y) {
                        rerenderCell()
                    }
                },
                [CELL_STATUS.EMPTY]: () => {
                    if (player1Coords.x === x && player1Coords.y === y) {
                        rerenderCell()
                    }
                },
            },
            [EVENTS.PLAYER2_MOVE]: {
                [CELL_STATUS.PLAYER2]: rerenderCell,
                [CELL_STATUS.GOOGLE]: () => {
                    if (player2Coords.x === x && player2Coords.y === y) {
                        rerenderCell()
                    }
                },
                [CELL_STATUS.EMPTY]: () => {
                    if (player2Coords.x === x && player2Coords.y === y) {
                        rerenderCell()
                    }
                },
            },
        }

        const inerTransitions = transitions[e.name]
        if (inerTransitions) {
            const transition =  inerTransitions[state.prevState]
            if(transition) transition()
        }
    })

    const ceilElement = document.createElement('td');
    rerenderCell()

    return ceilElement;
}
