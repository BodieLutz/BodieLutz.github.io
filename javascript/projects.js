const carousel = document.querySelector(".carousel");

function generateCards(projects){
    projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");

        let card_link = null;
        if(project.link === "#"){
            card.innerHTML = 
                `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.technologies}</p>
                <p>Sorry, this project is not available on Github!</p>
                <p>${project.date}</p>
                `;
        }else{
            card_link = document.createElement("a");
            card_link.href = project.link;
            card_link.target = "_blank";
            card_link.innerHTML = "View This Project On Github!";

            card.innerHTML = 
                `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.technologies}</p>
                <a href="${project.link}" target="_blank">View This Project On Github!</a>
                <p>${project.date}</p>
                `;

        }

        

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