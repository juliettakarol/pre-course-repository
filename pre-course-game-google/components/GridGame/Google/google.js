import { cathGoogle } from "../../../data/data.js"

export function Google(){
    const googleElement = document.createElement('img')
    googleElement.src = '../../../asset/img/google.png'
    googleElement.addEventListener('click',cathGoogle)
    return googleElement
}