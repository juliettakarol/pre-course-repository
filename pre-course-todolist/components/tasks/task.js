import { deleteTask } from "../../data/data.js"


export function Task(tasks){
    let taskElement = document.createElement('li')
        taskElement.append(tasks.title)
        const taskButtonElement = document.createElement('button')
        taskButtonElement.append('x')
        taskButtonElement.addEventListener('click', ()=>{
            deleteTask(tasks.id)
        })
        taskElement.append(taskButtonElement)
        return taskElement
}