import { createProjectSection, createAboutSection } from "./modules/utils";
import projects from "./data/projects.json";

const header = document.querySelector("header");
const aboutSection = createAboutSection();
header.appendChild(aboutSection);

const projectsContainer = document.querySelector(".projects-container");

projects.forEach((item) => {
  const project = createProjectSection(item);
  projectsContainer.appendChild(project);
});
