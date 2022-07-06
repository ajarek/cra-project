import { Button } from "./Button"
export class List{
    constructor(text,isCompleted,id){
        this.text = text 
        this.isCompleted = isCompleted
        this.id=id   
    }
    render(){
 const li = document.createElement('li')
    li.style.listStyleType="none"
    li.style.display="flex"
    li.style.justifyContent="space-between"
    li.style.alignItems="center"
    const p = document.createElement('p')
    p.id=this.id
    p.dataset.isCompleted=this.isCompleted
    p.textContent = this.text
    p.style.fontSize="1.3rem"
    p.style.width="100%"
    p.style.cursor="pointer"
    const editBtn = new Button("Edit","#2ecc71",null,this.id,"editBtn")
    const deleteBtn = new Button("Delete","#e74c3c",null,this.id,"deleteBtn")
    li.append(p,editBtn.render(),deleteBtn.render())
    return li
}
}