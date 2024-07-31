// function which rotates FAQ accordion arrows
function rotateAccordion() {
    const normalAngle = 0;
    const rotateAngle = 180;
    const accordionToggler = document.getElementsByClassName('accordionToggle');

    for (let i = 0; i < accordionToggler.length; i++) {
        // Initialize the current angle state for each element
        // let currentAngle = normalAngle;

        accordionToggler[i].addEventListener('click', function() {
            // Check the current transform style and update accordingly
            if (this.style.transform === `rotate(${rotateAngle}deg)`) {
                this.style.transform = `rotate(${normalAngle}deg)`;
                // currentAngle = normalAngle;
            } else {
                this.style.transform = `rotate(${rotateAngle}deg)`;
                // currentAngle = rotateAngle;
            }
        });
    }
}

console.log(rotateAccordion());


// function which toggles the accordion texts
function accordionToggle() {

    const accordionToggler = document.getElementsByClassName('accordionToggle');
    const accordionText = document.getElementsByClassName('accordionText');

    for (let i = 0; i < accordionToggler.length; i++) {
        const accordion = accordionToggler[i];
        accordion.addEventListener('click', function() {
            
            if (accordionText[i].style.display === 'block') {
                accordionText[i].style.display = 'none';
            } else{
                accordionText[i].style.display = 'block';
            }

        });
        
    };
    
}
accordionToggle();