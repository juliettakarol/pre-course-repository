import { Task } from "./task.js"

export function Tasks (tasks){
    const container = document.createElement('ol')
    for (let i = 0; i < tasks.length; i++) {
        let element = Task(tasks[i])
        container.append(element)
    }
    return container  
} 