import projects from "./data/projects.json";
import "./style.css";
import { createProjectSection } from "./modules/utils";

const projectsContainer = document.querySelector(".projects-section");

projects.forEach((item) => {
  const project = createProjectSection(item);
  projectsContainer.appendChild(project);
});
