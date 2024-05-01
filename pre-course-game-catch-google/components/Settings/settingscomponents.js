import { StartGame } from "../../data/data.js"

export function Settings(){
    const settingElement = document.createElement('div')
    const settingElements = document.createElement('p')
    const settingElementss = document.createElement('p')


    



    // function changeData() {
        
    //     var selectedValue = selectGridSizeElement.value;
        
      
    //     if (selectedValue === "4x4") {
    //       ge.innerHTML = "Данные для опции 1";
    //     } else if (selectedValue === "option2") {
    //       dataContainer.innerHTML = "Данные для опции 2";
        
    //   }}

    
    settingElementss.append(selectGridSize(), selectPointsToWin(), selectPointsToLose())
    settingElements.append(startButton())
    settingElement.append(settingElementss,settingElements)
    

    return settingElement
}


function selectGridSize(){
    const selectGridSizeElement = document.createElement('select')

    const optionSelectButton1 = document.createElement('option')
    optionSelectButton1.append('4x4')

    const optionSelectButton2 = document.createElement('option')
    optionSelectButton2.append('5x5')
    
    selectGridSizeElement.append(optionSelectButton1, optionSelectButton2)
    return selectGridSizeElement
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