document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const content_frame = document.getElementById("content-frame");

    links.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Remove active class from all links
        links.forEach((l) => l.classList.remove("active"));
        // Add active class to the clicked link
        link.classList.add("active");

        //Get HTML file from link
        const href = link.getAttribute("href");

        // shape.style.visibility = 'visible';
        // shape.classList.add('swipe-down');

        // shape.addEventListener("animationend", () => {
        content_frame.setAttribute("src", href);

        //   shape.classList.remove('swipe-down');
        //   shape.classList.add('swipe-up');

        //   shape.addEventListener("animationend", () => {
        //     shape.classList.remove('swipe-up');
        //     shape.style.visibility = 'hidden';
        //   }, {once: true});
        // }, {once: true});  
      });
    });
  });
  