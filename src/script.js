import projects from "./data/projects.json";
import "./style.css";
import {
  createProjectSection,
  createAboutSection,
  createContactSection,
} from "./modules/utils";

const header = document.querySelector(".header");
const aboutSection = createAboutSection();
header.appendChild(aboutSection);

const projectsContainer = document.querySelector(".projects-section");

projects.forEach((item) => {
  const project = createProjectSection(item);
  projectsContainer.appendChild(project);
});

const footer = document.querySelector(".footer");
const contactSection = createContactSection();
footer.appendChild(contactSection);
