import { todolist } from "./data/data.js";
import {Todolist} from "./components/todolist.js"
import { callBack } from "./data/data.js";




function reFresh() {
    
    const todolistElement = Todolist(todolist); 
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = ' '
    rootElement.append(todolistElement);
    
    
}

reFresh()
callBack(reFresh)