//array com dois elementos ou seja dois inputs..
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) =>{
    /*verificar o value, verificar o input se é igual
    uma string vazia*/
    if(target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }    
}
// remover o botão e add o botão
const handleChange = () =>{
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){

        button.removeAttribute('disabled');
    }

    else {
        button.setAttribute('disabled', '');

    }
}


inputs.forEach((input) =>
    input.addEventListener('focus', handleFocus)
);

inputs.forEach((input) =>
    input.addEventListener('focusout', handleFocusOut)
);

inputs.forEach((input) =>
    input.addEventListener('input', handleChange)
);