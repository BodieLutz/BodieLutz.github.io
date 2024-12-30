document.addEventListener("DOMContentLoaded", () => {
    const parentDocument = window.parent.document;
    const emailButton = parentDocument.getElementById("email-button");
    const contactLink = parentDocument.getElementById("contact-link");

    if (contactLink.classList.contains("active")) {
        emailButton.style.animation = "ripple 1s linear 0s infinite;";
    }
});
