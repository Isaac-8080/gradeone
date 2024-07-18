
const togglerMenu = document.querySelector('#toggleMenu');

const smNavbar = document.querySelector('#smScreenNav');

const smNavbarExit = document.querySelector('#smScreenNavExit');

togglerMenu.addEventListener('click', () => {

    if (smNavbar.style.display === 'block') {

        smNavbar.style.display = 'none';        

    } else {
        
        smNavbar.style.display = 'block'

    }

});

smNavbarExit.addEventListener('click', () => {
    
    smNavbar.style.display = 'none';

});