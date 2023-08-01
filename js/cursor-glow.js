const glow = document.querySelector('.cursor-glow');
const body = document.querySelector('.container')

function updateGlow(e) {
    setTimeout(() => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Check if the mouse is inside the window
        if (mouseX >= 0 && mouseY >= 0 && mouseX <= windowWidth && mouseY <= windowHeight) {
            glow.style.opacity = 1;
            glow.style.left = getRelativeCoordinates(e, body).x - 350 + 'px';
            glow.style.top = getRelativeCoordinates(e, body).y - 350 + 'px';
        } else {
            // If the mouse is outside the window, fade out the glow
            glow.style.opacity = 0;
        }
    }, 50);
}

function getRelativeCoordinates(event, referenceElement) {

    const position = {
        x: event.pageX,
        y: event.pageY
    };

    const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
    }

    return {
        x: position.x - offset.left,
        y: position.y - offset.top,
    };

}

// Add event listeners
document.addEventListener('mousemove', updateGlow);
document.addEventListener('mouseenter', updateGlow);
document.addEventListener('mouseleave', updateGlow);
