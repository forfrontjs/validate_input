let contact = document.querySelector('.contact')
let emailInput = document.createElement('input')
let passInput = document.createElement('input')
let error = document.createElement('p')
contact.before(emailInput)
contact.before(passInput)
passInput.after(error)

contact.addEventListener('click', ()=>{
    if(emailInput.value.trim()=== '' || passInput.value.trim()=== ''){
        error.innerText = 'Все поля должны быть заполнены'
    }else{
        let user = {
            email: emailInput.value,
            password: passInput.value
        }
        console.log(user);
    }
})