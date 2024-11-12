function createProjectDisplay(project) {
  const container = document.createElement("div");

  const projectScreenshot = document.createElement("div");
  const projectImage = document.createElement("img");

  projectImage.src = project.imageSrc;

  projectScreenshot.appendChild(projectImage);

  const projectBody = document.createElement("div");

  const projectHeader = document.createElement("div");

  const projectIcons = document.createElement("div");

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

module.exports = { createProjectDisplay };
