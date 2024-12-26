document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("resume-btn");
    const parentDocument = window.parent.document;
    const links = parentDocument.querySelectorAll(".nav-link");
    const resume_link = parentDocument.getElementById("resume-link");
    const content_frame = parentDocument.getElementById("content-frame");
  
    //add event listener to resume button
    button.addEventListener("click", (e) => {
        e.preventDefault();

        links.forEach((link) => {
            //remove active class from all links
            link.classList.remove("active");  
          });
        
        //add active class to resume link
        resume_link.classList.add("active");
        
        //get resume href
        const href = resume_link.getAttribute("href");

        //load html of resume
        content_frame.setAttribute("src", href);
    });
  });