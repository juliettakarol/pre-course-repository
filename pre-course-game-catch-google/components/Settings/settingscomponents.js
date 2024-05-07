import { StartGame, setGridSize } from "../../data/data.js"

export function Settings(){
    const settingElement = document.createElement('div')
    const settingElement1 = document.createElement('p')
    const settingElement2 = document.createElement('p')
    
    settingElement1.append(selectGridSize(), selectPointsToWin(), selectPointsToLose())
    settingElement2.append(startButton())
    settingElement.append(settingElement1,settingElement2)
    

    return settingElement
}


function selectGridSize(){
    const selectGridSizeElement = document.createElement('select')

    const optionSelectButton1 = document.createElement('option')
    optionSelectButton1.append('4x4')

    const optionSelectButton2 = document.createElement('option')
    optionSelectButton2.append('5x5')

    const optionSelectButton3 = document.createElement('option')
    optionSelectButton3.append('6x6')
    
    selectGridSizeElement.append(optionSelectButton1, optionSelectButton2, optionSelectButton3)

    selectGridSizeElement.addEventListener('change', ()=>{
        settingSelectGridSize(selectGridSize().value)}
    )
   
    return selectGridSizeElement
}




function settingSelectGridSize(valueGridSize){
    const element = valueGridSize
    if(element==='4x4'){
        setGridSize(4,4)
    }
    if(element==='5x5'){
        setGridSize(5,5)
    }
    if(element==='6x6'){
        setGridSize(6,6)
    }

}

function selectPointsToWin(){
    const selectPointsToWinElement = document.createElement('select')

    const optionSelectButton1 = document.createElement('option')
    optionSelectButton1.append('10 pts')

    const optionSelectButton2 = document.createElement('option')
    optionSelectButton2.append('20 pts')
    
    selectPointsToWinElement.append(optionSelectButton1, optionSelectButton2)
    return selectPointsToWinElement
}

function selectPointsToLose(){
    const selectPointsToWinElement = document.createElement('select')

    const optionSelectButton1 = document.createElement('option')
    optionSelectButton1.append('10 pts')

    
    const optionSelectButton2 = document.createElement('option')
    optionSelectButton2.append('20pts')
    
    selectPointsToWinElement.append(optionSelectButton1, optionSelectButton2)
    return selectPointsToWinElement
}

function startButton(){
    const startButtonElement = document.createElement('button')
    startButtonElement.append('start')
    startButtonElement.addEventListener('click', ()=>{
        StartGame()
    })
    return startButtonElement
}