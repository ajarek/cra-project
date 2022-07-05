export class Input{
    constructor(text, onChange,placeholder) {
        this.text = text
        this.onChange = onChange
        this.placeholder = placeholder
    }
        
    render(){
        const Input = document.createElement('input')
        Input.classList.add('input')
        Input.style.height = '30px'
        Input.style.width = '50%'
        

        Input.setAttribute('placeholder', this.placeholder)
        setTimeout(function () {
            Input.focus();
          }, 0);
        Input.addEventListener('input', (e) =>
         this.onChange(e.target.value)
        )
        return Input
    }
    
}