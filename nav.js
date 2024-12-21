
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', function () {

//         document.querySelectorAll('.nav-link').forEach(l => {
//             l.classList.remove('active');
//         });

//         this.classList.add('active');
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const nav = document.querySelector(".vertical-nav");
  
    links.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Remove active class from all links
        links.forEach((l) => l.classList.remove("active"));
  
        // Add active class to the clicked link
        link.classList.add("active");
      });
    });
  });
  