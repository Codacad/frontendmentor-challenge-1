document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.querySelector('.email-input');
    document.querySelector('.free-access-btn').addEventListener('click', emailValidator)
    function emailValidator(){
        // inputValue.trim().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if(inputValue.value.trim().length <= 0){
            document.querySelector('.error-message').textContent = 'Please enter email'
            document.querySelector('.error-message').style.color = 'red'
        }else{
            if(inputValue.value.trim().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                document.querySelector('.error-message').textContent = 'Submitted Successfully...😍'
                document.querySelector('.error-message').style.color = 'green'
            }else{
                document.querySelector('.error-message').textContent = 'Please enter the correct email'
                document.querySelector('.error-message').style.color = 'red'
            }   
        }
    }
})