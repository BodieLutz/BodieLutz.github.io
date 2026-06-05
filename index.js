document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const hamburger = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navBrand = document.getElementById("nav-brand");

    function openMenu() {
        mobileMenu.classList.add("open");
        hamburger.querySelector("i").className = "bi bi-x";
    }

    function closeMenu() {
        mobileMenu.classList.remove("open");
        hamburger.querySelector("i").className = "bi bi-list";
    }

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
    });

    navBrand.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        links.forEach(l => l.classList.remove("active"));
        closeMenu();
    });

    // Nav click: smooth-scroll to section anchor, close mobile menu
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: "smooth" });
                links.forEach(l => l.classList.remove("active"));
                document.querySelectorAll(`.nav-link[href="${href}"]`).forEach(l => l.classList.add("active"));
            }
            closeMenu();
        });
    });

    // Intersection Observer: keep active nav in sync as user scrolls
    const sections = document.querySelectorAll("#main-content section[id]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove("active"));
                document.querySelectorAll(`.nav-link[href="#${entry.target.id}"]`).forEach(l => l.classList.add("active"));
            }
        });
    }, { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" });

    sections.forEach(section => observer.observe(section));
});
