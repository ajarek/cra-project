export class Button{
    constructor( text,color, onClick ) {
        this.text = text
        this.color = color
        this.onClick = onClick
    }
    
    render(){
        const Button = document.createElement('button')
        Button.classList.add('button')
        Button.innerText = this.text
        Button.setAttribute('type','submit')
        Button.style.backgroundColor = this.color
        Button.style.borderColor = this.color
        Button.style.color = "white"
        Button.style.height = '35px'
        Button.style.padding = '0 1rem'
        Button.style.margin = "0 0.2rem"
        Button.style.borderRadius = '0.25rem'
        Button.addEventListener('click',this.onClick)
        Button.style.cursor = "pointer"
        
        return Button
    }
   
}
