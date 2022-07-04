import { Form } from "./Form"
import {EasyHTTP} from './EasyHTTP-class.js'
import { List } from "./List"
const root = document.querySelector("#root")
const http=new EasyHTTP()
 
function addTasks(task){
    if(task){  
        const data={
            task: task,
            isCompleted: false
        }     
    http.post('https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/.json',data)
    }
    render()
}

function loadTasks(){
    http.get('https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/.json')
    .then(data=>{
        Object.entries(data).forEach(([key,value])=>{
        const list=new List(value.task,key)
        root.appendChild(list.render())
    })
})
}

function render(){
    root.innerHTML=""
const form = new Form("", (task) => {addTasks(task)})
root.appendChild(form.render())
loadTasks()
}
render()