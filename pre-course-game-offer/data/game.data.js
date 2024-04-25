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

    status: OFFER_STATUS.catch,

    scores:{
        catchOffer: 1,
        missOffer: 1
    },

    coords:{
        current:{
            x: 2,
            y: 0
        },
        catch:{
            x: 0,
            y: 2
        },
        missed:{
            x: 1,
            y: 1
        },
    }
 }

 let subsruber = function(){
 }

 export function subsrube(newSubsruber){
    subsruber = newSubsruber
 }


 setInterval(() => {
    moveRandomPosition()
 }, 2000);

 function moveRandomPosition (){
    data.coords.current.x = getRandomInteger(data.settings.columns-1)
    data.coords.current.y = getRandomInteger(data.settings.rows-1)
    subsruber()
 }

 function getRandomInteger(n) {
    return Math.floor(Math.random() * (n + 1));
  }
 