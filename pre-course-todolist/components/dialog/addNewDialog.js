import { addDialogFalse, addNewTask, todolist } from "../../data/data.js"


export function addNewDialog(){
    
    const container = document.createElement('dialog')
    container.open = todolist.dialog.open

    const inputElement = document.createElement('input')
    
    const buttonSave = document.createElement('button')
    buttonSave.append('save')
    buttonSave.addEventListener('click', ()=>{
        addNewTask(inputElement.value)
    })
   
    const buttonCancel = document.createElement('button')
    buttonCancel.append('cancel')
    buttonCancel.addEventListener('click', addDialogFalse)
    container.append(inputElement,buttonSave,buttonCancel)


    return container


}