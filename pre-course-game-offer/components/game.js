
import {Settings} from '../components/settings.js'
import {Score} from '../components/score.js'
import {Grid} from '../components/grid.js'
import { data } from '../data/game.data.js'

export function Game(){
    const container = document.createElement('div')

    const settingsElement = Settings()
    container.append(settingsElement)

    const scoreElement = Score(data.scores)
    container.append(scoreElement)

    const gridElement = Grid(data.settings)
    container.append(gridElement)




    return container


}