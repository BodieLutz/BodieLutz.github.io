// projects.js

    //Fetch projects from local JSON file
    async function getProjects() {
        try {
            const response = await fetch("/javascript/projects.json");
            if (!response.ok) {
                throw new Error(`Could not fetch local project data! status: ${response.status}`);
            }
            const projects = await response.json();
            generateProjects(projects);
        }
        catch (error) {
            console.error(`Error fetching projects: ${error}`);
        }
    }

    //Javascript generator to generate HTML for projects
    function generateProjects(projects) {
        const timeline = document.getElementById("projects-timeline");
        //generate HTML for each project
        projects.forEach((project) => {
            //if project must be private...
            if (project.link === "#") {
                const projectCard = `
                <div class="timeline-item">
                    <div class="card mb-3">
                        <div class="cardBody">
                            <h5 class="card-title">${project.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${new Date(project.date).toLocaleDateString()}</h6>
                            <p class="card-text">${project.description}</p>
                            <p class="non-link">Sorry, this was a school project and must remain private :)</p>
                        </div>
                    </div>
                </div>`; 
            } 
            
            else {
                const projectCard = `
                <div class="timeline-item">
                    <div class="card mb-3">
                        <div class="cardBody">
                            <h5 class="card-title">${project.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${new Date(project.date).toLocaleDateString()}</h6>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.link}" class="card-link">View Project</a>
                        </div>
                    </div>
                </div>`; 
            }
            timeline.innerHTML += projectCard;         
        });
    }

document.addEventListener("DOMContentLoaded", getProjects);