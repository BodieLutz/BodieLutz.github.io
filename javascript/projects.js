const carousel = document.querySelector(".carousel");

function generateCards(projects){
    projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = 
        `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View This Project On Github!</a>
        <p>${project.technologies}</p>
        <p>${project.date}</p>
         `;

        carousel.appendChild(card);
    });
}

fetch("javascript/projects.json")
    .then((response) => response.json())
    .then(projects => {
        generateCards(projects);
    })
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });



document.getElementById("next").addEventListener("click", () => {
    carousel.scrollBy({ left: 110, behavior: "smooth" });
});

document.getElementById("prev").addEventListener("click", () => {
    carousel.scrollBy({ left: -110, behavior: "smooth" });
});