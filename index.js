document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const content_frame = document.getElementById("content-frame");
    const hamburger = document.getElementById("hamburger-btn");
    const col1 = document.getElementById("col1");
    const backdrop = document.getElementById("sidebar-backdrop");

    function openSidebar() {
        col1.classList.add("sidebar-open");
        backdrop.classList.add("active");
    }

    function closeSidebar() {
        col1.classList.remove("sidebar-open");
        backdrop.classList.remove("active");
    }

    hamburger.addEventListener("click", () => {
        col1.classList.contains("sidebar-open") ? closeSidebar() : openSidebar();
    });

    backdrop.addEventListener("click", closeSidebar);

    links.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all links
        links.forEach((l) => l.classList.remove("active"));
        // Add active class to the clicked link
        link.classList.add("active");

        //Get HTML file from link
        const href = link.getAttribute("href");

        content_frame.setAttribute("src", href);

        // Close sidebar on mobile after navigation
        closeSidebar();
      });
    });
  });
  