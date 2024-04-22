import { todolist } from "../data/data.js";
import { Header } from "../components/header/header.js"
import { Tasks } from "./tasks/tasks.js";
import { Button } from "./button/button.js";
import { addNewDialog } from "./dialog/addNewDialog.js";



export function Todolist(){
    const container = document.createElement('div')
    const header = Header(todolist.title)
    const tasks = Tasks(todolist.tasks)
    const button = Button('add')
    const dialog = addNewDialog()

    container.append(header)
    container.append(tasks)
    container.append(button)
    container.append(dialog)

    return container

}