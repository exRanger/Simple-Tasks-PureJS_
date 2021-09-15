document.addEventListener('DOMContentLoaded', (e)=>{
    
    const nameField = /^[a-zA-Z\s]{1,120}$/
    const emailField = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordField = /^[a-zA-Z0-9]{8,}$/
    
    const {form} = document.forms
    const values = {}
    const elements = {}
    
    for(let element of form){
            
        const {name} = element 
             
        if(name){
            elements[name] = element  
        }
    }  

    function showSuccesMessage(input, messageElement){
        input.className = 'success'
        messageElement.innerHTML = 'Correct!'
        messageElement.style.color = '#72ec67'
        messageElement.style.display = "block"
    }
    function showErrorMessage(input, messageElement){
        input.className = 'error'
        messageElement.style.display = 'block'
        messageElement.style.color = '#ff4b33'
        messageElement.innerHTML = `${input.name}: Error!` // must contain characters correctly! 
    }
    
    function checkSuccesFor(name, value){
            switch(name){
                case elements.username: return nameField.test(value)
                case elements.email: return emailField.test(value)
                case elements.password: return passwordField.test(value)
            }
    }
    
    for(key in elements){
        elements[key].addEventListener('input', e =>{
            const input = e.target
            const messageElement = document.querySelector(`[name="${input.name}"] + .message`)
            if(checkSuccesFor(input, input.value) && input.value.replace(/\s/g,'') !==''){
                console.log('true/')
                showSuccesMessage(input, messageElement)
                input.classList.add('correctField')
            }else{
                showErrorMessage(input, messageElement)
                input.classList.remove('correctField') 
            }
        })
    }
    
    form.onsubmit = (e) => {
        // clear   
    }
        
        
        
        console.log(values)
    }
})


