function createProjectSection(project) {
  const container = document.createElement("div");
  container.className = "project";

  const projectScreenshot = document.createElement("div");
  projectScreenshot.className = "project-image";

  projectScreenshot.style.backgroundImage = `url(${project.imageSrc})`;
  projectScreenshot.style.backgroundSize = "cover";

  const projectBody = document.createElement("div");
  projectBody.className = "project-body";

  const projectHeader = document.createElement("div");
  projectHeader.className = "project-header";

  const projectIcons = document.createElement("div");
  projectIcons.className = "project-icons";

  const githubIcon = document.createElement("i");
  githubIcon.className = "devicon-github-original colored";

  const openInNewTabIcon = document.createElement("i");
  openInNewTabIcon.className = "fa-solid fa-arrow-up-right-from-square";

  projectIcons.appendChild(githubIcon);
  projectIcons.appendChild(openInNewTabIcon);

  const projectName = document.createElement("div");
  projectName.textContent = project.name;

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(projectIcons);

  const projectDescription = document.createElement("div");
  projectDescription.textContent = project.description;

  projectBody.appendChild(projectHeader);
  projectBody.appendChild(projectDescription);

  container.appendChild(projectScreenshot);
  container.appendChild(projectBody);

  return container;
}

module.exports = { createProjectSection };
