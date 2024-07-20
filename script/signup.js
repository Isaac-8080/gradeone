// password
const password = document.querySelector('#password');
const showPassword = document.querySelector('#visibility');
const hidePassword = document.querySelector('#visibilityOff');

showPassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'block';
    } else {
        password.type = 'password';
    }
});

hidePassword.addEventListener('click', () => {
    if (password.type === 'text') {
        password.type = 'password';
        hidePassword.style.display = 'none';
        showPassword.style.display = 'block';
    } else {
        password.type = 'text';
    }

});


// confirm password
const repeatPassword = document.querySelector('#confirmPassword');
const repeatShowPassword = document.querySelector('#repectVisibility');
const repeatHidePassword = document.querySelector('#repectVisibilityOff');
repeatShowPassword.addEventListener('click', () => {

    if (repeatPassword.type === 'password') {
        repeatPassword.type = 'text';
        repeatShowPassword.style.display = 'none';
        repeatHidePassword.style.display = 'block';
    } else {
        repeatPassword.type = 'password';
    }
});

repeatHidePassword.addEventListener('click', () => {
    if (repeatPassword.type === 'text') {
        repeatPassword.type = 'password';
        repeatHidePassword.style.display = 'none';
        repeatShowPassword.style.display = 'block';
    } else {
        repeatPassword.type = 'text';
    }
});

// Function to toggle password visibility
// const togglePasswordVisibility = (passwordField, showIcon, hideIcon) => {
//     if (passwordField.type === 'password') {
//         passwordField.type = 'text';
//         showIcon.style.display = 'none';
//         hideIcon.style.display = 'block';
//     } else {
//         passwordField.type = 'password';
//         hideIcon.style.display = 'none';
//         showIcon.style.display = 'block';
//     }
// };

// // Password fields and icons
// const password = document.querySelector('#password');
// const showPassword = document.querySelector('#visibility');
// const hidePassword = document.querySelector('#visibilityOff');
// const repeatPassword = document.querySelector('#confirmPassword');
// const repeatShowPassword = document.querySelector('#repectVisibility');
// const repeatHidePassword = document.querySelector('#repectVisibilityOff');

// // Event listeners for password field
// showPassword.addEventListener('click', () => togglePasswordVisibility(password, showPassword, hidePassword));
// hidePassword.addEventListener('click', () => togglePasswordVisibility(password, showPassword, hidePassword));

// // Event listeners for confirm password field
// repeatShowPassword.addEventListener('click', () => togglePasswordVisibility(repeatPassword, repeatShowPassword, repeatHidePassword));
// repeatHidePassword.addEventListener('click', () => togglePasswordVisibility(repeatPassword, repeatShowPassword, repeatHidePassword));