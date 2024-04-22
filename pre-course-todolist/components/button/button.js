import { addDialogTrue } from "../../data/data.js"


export function Button(name){
    const container = document.createElement('button')
    container.append(name)
    container.addEventListener('click', addDialogTrue)
    return container

}