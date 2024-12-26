document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("resume-btn");
    const parentDocument = window.parent.document;
    const links = parentDocument.querySelectorAll(".nav-link");
  
    //add event listener to resume button
    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Button Works!");
    });
  });