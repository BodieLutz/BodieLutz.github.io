document.addEventListener("DOMContentLoaded", () => {
    const parentDocument = window.parent.document;
    const emailButton = parentDocument.getElementById("email-button");
    const contactLink = parentDocument.getElementById("contact-link");

    if (contactLink.classList.contains("active")) {
        alert("Contact link is active");
        emailButton.style.animation = "ripple 1s linear 0s infinite;";
    }

    contactLink.addEventListener("click", () => {
        emailButton.style.animation = "ripple 1s linear 0s infinite";
    });
});
