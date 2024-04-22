
export const todolist = {
    id: createId(),
    title: 'Todolist',
    tasks: [
        {
            id: createId(),
            title: 'Buy chiken'
        },
        {
            id: createId(),
            title: 'Buy water'
        },
    ],
    dialog:{
        open: false,
    }
}

// создание диалога
export function addDialogTrue(){
    todolist.dialog.open = true 
    newCallback()

}

export function addDialogFalse(){
    todolist.dialog.open = false 
    newCallback()
    
}


function createId (){
return Math.round(Math.random()*1000)
}

let newCallback = function (){

}

export function callBack(anyFunstion){
newCallback = anyFunstion
}

export function addNewTask(anyTitle){
    const newTask = {
        id: createId,
        title: anyTitle
    }
  todolist.tasks.push(newTask)
  newCallback()
}

export function deleteTask(anyId){
    todolist.tasks = todolist.tasks.filter((el)=> el.id != anyId )
    newCallback()
}

