import { EVENTS, STATES, getHeroysGoogle, getHeroysPlayer1, getHeroysPlayer2, subcribe } from "../../../data/data.js";
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

    function rerenderCell() {
        console.log(x, y)
        ceilElement.innerHTML = ''
        if (getHeroysGoogle().x === x && getHeroysGoogle().y === y) {
            ceilElement.append(Google());
            state.prevState = CELL_STATUS.GOOGLE
        } else if (getHeroysPlayer1().x === x && getHeroysPlayer1().y === y) {
            ceilElement.append(Player(1));
            state.prevState = CELL_STATUS.PLAYER1
        } else if (getHeroysPlayer2().x === x && getHeroysPlayer2().y === y) {
            ceilElement.append(Player(2));
            state.prevState = CELL_STATUS.PLAYER2
        } else {
            state.prevState = CELL_STATUS.EMPTY
        }
    }

    subcribe((e) => {

        const transition = {
            [EVENTS.GOOGLE_JUMP]: () => {
                const innerTransition = {
                    [CELL_STATUS.GOOGLE]: () => {
                        rerenderCell()
                    },
                    [CELL_STATUS.EMPTY]: () => {
                        if (getHeroysGoogle().x === x && getHeroysGoogle().y === y) {
                            rerenderCell()
                        }

                    },
                }
                const transition = innerTransition[state.prevState]
                if (transition) transition()
            },
            [EVENTS.PLAYER1_MOVE]: () => {
                const innerTransition = {
                    [CELL_STATUS.PLAYER1]: () => {
                        rerenderCell()
                    },
                    [CELL_STATUS.GOOGLE]: () => {
                        if (getHeroysPlayer1().x === x && getHeroysPlayer1().y === y) {
                            rerenderCell()
                        }

                    },
                    [CELL_STATUS.EMPTY]: () => {
                        if (getHeroysPlayer1().x === x && getHeroysPlayer1().y === y) {
                            rerenderCell()
                        }

                    },
                }
                const transition = innerTransition[state.prevState]
                if (transition) transition()
                
            },
            [EVENTS.PLAYER2_MOVE]: () => {
                const innerTransition = {
                    [CELL_STATUS.PLAYER2]: () => {
                        rerenderCell()
                    },
                    [CELL_STATUS.GOOGLE]: () => {
                        if (getHeroysPlayer2().x === x && getHeroysPlayer2().y === y) {
                            rerenderCell()
                        }

                    },
                    [CELL_STATUS.EMPTY]: () => {
                        if (getHeroysPlayer2().x === x && getHeroysPlayer2().y === y) {
                            rerenderCell()
                        }

                    },
                }
                const transition = innerTransition[state.prevState]
                if (transition) transition()
                
            },
          
        }

        const handler = transition[e.name]
        if (handler) handler()

    })

    const ceilElement = document.createElement('td');
    rerenderCell()

    return ceilElement;

}