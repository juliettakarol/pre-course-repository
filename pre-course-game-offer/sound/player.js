import { OFFER_STATUS, data, subsrube } from "../data/game.data.js"

export function Player(){
    const catchAudio = new Audio
    catchAudio.src = '../asset/sounds/catch.mp3.mp3'
    const missAudio = new Audio
    missAudio.src = '../asset/sounds/miss.mp3'

    subsrube(()=>{
        
        if(data.status === OFFER_STATUS.catch){
            catchAudio.currentTime = 0
            catchAudio.play()
        }
        if(data.status === OFFER_STATUS.miss){
            missAudio.currentTime = 0
            missAudio.play()
        }
 
        
    })
}

