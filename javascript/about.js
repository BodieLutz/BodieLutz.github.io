document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("resume-btn");
    const parentDocument = window.parent.document;
    const links = parentDocument.querySelectorAll(".nav-link");
    const resume_link = parentDocument.getElementById("resume-link");
  
    //add event listener to resume button
    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Button Works!");
        alert(links);
        alert(resume_link);
    });
  });