const userPassword = document.querySelector('#signinPassword');
const showPassword = document.querySelector('#visibility');
const hidePassword = document.querySelector('#visibilityOff');

showPassword.addEventListener('click', () => {
    if (userPassword.type === 'password') {
        userPassword.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'block';
    } else {
        userPassword.type = 'password';
    }
});

hidePassword.addEventListener('click', () => {
    if (userPassword.type === 'text') {
        userPassword.type = 'password';
        hidePassword.style.display = 'none';
        showPassword.style.display = 'block';
    } else {  
        userPassword.type = 'text';
    }
});