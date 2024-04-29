import { StartGame } from "../../data/data.js"

export function Settings(){
    const settingElement = document.createElement('div')
    const startButton = document.createElement('button')
    startButton.append('start')
    startButton.addEventListener('click', ()=>{
        StartGame()
    })
    settingElement.append(startButton)
    

    return settingElement
}