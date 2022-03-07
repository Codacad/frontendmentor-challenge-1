document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.querySelector('.email-input').value;
    document.querySelector('.free-access-btn').addEventListener('click', emailValidator)
    function emailValidator(){

        if(inputValue.trim().length < 1){
            document.querySelector('.error-message').textContent = 'Please enter your email'
        }else{
            if(inputValue.trim().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                console.log('Submitted')
            }else{
                document.querySelector('.error-message').textContent = 'Wrong Email'
            }
        }

        // if(inputValue.trim() == "" && !inputValue.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        //     setTimeout(() => {
        //         document.querySelector('.error-message').textContent = ''
        //     }, 3000)
        // }
    }
    

})