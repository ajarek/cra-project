import { Button } from "./Button"
export class List{
    constructor(text,id){
        this.text = text 
        this.id=id   
    }
    render(){
 const li = document.createElement('li')
    li.id=this.id
    li.style.listStyleType="none"
    li.style.display="flex"
    li.style.justifyContent="space-between"
    li.style.alignItems="center"
    const p = document.createElement('p')
    p.textContent = this.text
    p.style.fontSize="1.2rem"
    p.style.width="100%"
    const editBtn = new Button("Edit","#2ecc71")
    const deleteBtn = new Button("Delete","#e74c3c")
    li.append(p,editBtn.render(),deleteBtn.render())
    return li
}
}