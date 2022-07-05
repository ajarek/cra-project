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
     .then(()=>{render()})
    }    
}

function loadTasks(){    
    http.get('https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/.json')
    .then(data=>{
        Object.entries(data).forEach(([key,value])=>{
        const list=new List(value.task,value.isCompleted,key)
        root.append(list.render())     
    })
    isCompletedSetting()
    isCompletedSettingDB()
})
}

function isCompletedSetting(){
const paragraphs=document.querySelectorAll('p')
paragraphs.forEach(paragraph=>{

    if(paragraph.dataset.isCompleted==='true'){
        paragraph.style.textDecoration="line-through"
    }
    else{
        paragraph.style.textDecoration="none"
    }
})
}

function isCompletedSettingDB(){
const paragraphs=document.querySelectorAll('p')
paragraphs.forEach(paragraph=>{
paragraph.addEventListener('click',()=>{
    const data={
        isCompleted: paragraph.dataset.isCompleted==='true'?false:true
    }
    http.patch(`https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/${paragraph.id}.json`,data)
    .then(()=>{
        render()
    })
    
})
})
}

function render(){
root.innerHTML=""
const form = new Form("", (task) => {addTasks(task)})
root.append(form.render())
loadTasks()

}
render()
