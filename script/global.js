// Targeting the menu toggler icon
const togglerMenu = document.querySelector('#toggleMenu'); 

// Targeting the menu (small screens)
const smNavbar = document.querySelector('#smScreenNav');

// Targeting empty space (small screens)
const smNavbarExit = document.querySelector('#smScreenNavExit');

// Toggle nav menu on click (small screens)
togglerMenu.addEventListener('click', () => {
    if (smNavbar.style.display === 'block') {
        smNavbar.style.display = 'none';        
    } else {
        smNavbar.style.display = 'block'
    }
});

// Hide nav menu on empty space click (small screens)
smNavbarExit.addEventListener('click', () => {
    smNavbar.style.display = 'none';
});


// function that holds the brand name
function brandName(brand_name) {
    
    // variable targeting the brand containers in html
    const targetBrandName = document.getElementsByClassName('brand-name');

    for (let i = 0; i < targetBrandName.length; i++) {
        // prints the brand name into the brand containers in html
        targetBrandName[i].innerHTML = brand_name;
    }
    
}

brandName('GradeOne');