 export const OFFER_STATUS = {
    default: 'defailt',
    miss: 'missed',
    catch: 'catch'
 }
 
 
 export const data = {
    settings:{
        columns: 4,
        rows: 4,
        pointsWin: 10,
        deltaTimeInMs: 100,
        maxMisses:3,
        isMuted: false
    },

    status: OFFER_STATUS.default,

    scores:{
        catchOffer: 1,
        missOffer: 1
    },

    coords:{
        current:{
            x: 2,
            y: 0
        },
        previous:{
            x: 0,
            y: 2
        },
    
    }
 }

 let subsruber = function(){
 }

 export function subsrube(newSubsruber){
    subsruber = newSubsruber
 }


 let stepInterval 

 function runStepInterval(){
    stepInterval = setInterval(() => {
        missOffer()
        moveRandomPosition(true)
        subsruber()
    
     }, 2000);
 }

 runStepInterval()

 function moveRandomPosition (){
    let newX = null
    let newY = null

    do {
        newX = getRandomInteger(data.settings.columns-1)
        newY = getRandomInteger(data.settings.rows-1)
    }
    while (
        newX===data.coords.current.x && newY===data.coords.current.y
    )

   
    data.coords.current.x = newX
    data.coords.current.y = newY
    
 }

 function missOffer(){
    data.status = OFFER_STATUS.miss
    data.scores.missOffer++
    data.coords.previous = {...data.coords.current}

    setTimeout(
        ()=>{
        data.status = OFFER_STATUS.default
        subsruber()
    }  ,200)

 }

 export function catchOffer(){
    data.status = OFFER_STATUS.catch
    data.scores.catchOffer++
    data.coords.previous = {...data.coords.current}

    setTimeout(
        ()=>{
        data.status = OFFER_STATUS.default
        subsruber()
    },200)

    moveRandomPosition()
    subsruber()
    clearInterval(stepInterval)
    runStepInterval()
 }


 function getRandomInteger(n) {
    return Math.floor(Math.random() * (n + 1));
  }
 