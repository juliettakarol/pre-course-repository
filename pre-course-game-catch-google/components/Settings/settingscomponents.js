import { OPTIONS, StartGame, setGridSize, setPointsToLose, setPointsToWin } from "../../data/data.js"
//import { Selector } from "./selector.js"

export function Settings(){
    const settingElement = document.createElement('div')

    const containerSelector = document.createElement('div')

    const selectGridSize = selectGridSizeFunction(OPTIONS.gridSize, 'Grid size')

    containerSelector.append(selectGridSize)




    const startButtonElement = document.createElement('button')
    startButtonElement.append('start')
    startButtonElement.addEventListener('click', ()=>{
        StartGame()
    })
    
    settingElement.append(containerSelector,startButtonElement)
    
    return settingElement
}






function selectGridSizeFunction(array, Title){
    const container = document.createElement('div')

    const containerTitle = document.createElement('div')
    containerTitle.append(Title)


    const selectGridSizeElement = document.createElement('select')

    for (let i = 0; i < array.length; i++) {
        const optionElement = document.createElement('option')
        optionElement.append(`${array[i].x} x ${array[i].y}`)
        selectGridSizeElement.append(optionElement)
    }

    selectGridSizeElement.addEventListener('change', ()=>{
        setGridSize(Number(selectGridSizeElement.value.split('x')[0]), Number(selectGridSizeElement.value.split('x')[1]))})

    container.append(containerTitle, selectGridSizeElement)


    return container
}



// function selectGridSize(){
//     const selectGridSizeElement = document.createElement('select')

//     const optionSelectButton1 = document.createElement('option')
//     optionSelectButton1.append('4x4')

//     const optionSelectButton2 = document.createElement('option')
//     optionSelectButton2.append('5x5')

//     const optionSelectButton3 = document.createElement('option')
//     optionSelectButton3.append('6x6')
    
//     selectGridSizeElement.append(optionSelectButton1, optionSelectButton2, optionSelectButton3)

//     selectGridSizeElement.addEventListener('change', ()=>{
//         settingSelectGridSize(selectGridSize().value)}
//     )
   
//     return selectGridSizeElement
// }




// function settingSelectGridSize(valueGridSize){
//     const element = valueGridSize
//     if(element==='4x4'){
//         setGridSize(4,4)
//     }
//     if(element==='5x5'){
//         setGridSize(5,5)
//     }
//     if(element==='6x6'){
//         setGridSize(6,6)
//     }

// }

// function selectPointsToWin(){
//     const selectPointsToWinElement = document.createElement('select')

//     const optionSelectButton1 = document.createElement('option')
//     optionSelectButton1.append('10 pts')

//     const optionSelectButton2 = document.createElement('option')
//     optionSelectButton2.append('20 pts')
    
//     selectPointsToWinElement.append(optionSelectButton1, optionSelectButton2)
//     return selectPointsToWinElement
// }

// function selectPointsToLose(){
//     const selectPointsToWinElement = document.createElement('select')

//     const optionSelectButton1 = document.createElement('option')
//     optionSelectButton1.append('10 pts')

    
//     const optionSelectButton2 = document.createElement('option')
//     optionSelectButton2.append('20pts')
    
//     selectPointsToWinElement.append(optionSelectButton1, optionSelectButton2)
//     return selectPointsToWinElement
// }

