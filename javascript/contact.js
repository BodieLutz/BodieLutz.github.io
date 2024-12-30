document.addEventListener("DOMContentLoaded", () => {
    const parentDocument = window.parent.document;
    const emailButton = parentDocument.getElementById("email-button");
    const contactLink = parentDocument.getElementById("contact-link");

    if (contactLink.classList.contains("active")) {
        // emailButton.style.animation = "ripple 1s linear 0s infinite;";
        // Define the keyframes for the ripple effect
        const rippleKeyframes = [
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(1.3)', opacity: 1 },
            { transform: 'scale(1.6)', opacity: 0 },
        ];
    
        // Define animation options
        const rippleOptions = {
            duration: 1000, // Animation duration in milliseconds
            iterations: 5,  // Number of times to run the animation (1 for single run)
            easing: 'linear', // Easing function
        };

        emailButton.animate(rippleKeyframes, rippleOptions);
    }

});
