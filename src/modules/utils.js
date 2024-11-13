function createProjectSection(project) {
  const container = document.createElement("div");

  const projectScreenshot = document.createElement("div");
  const projectImage = document.createElement("img");

  projectImage.src = project.imageSrc;

  projectScreenshot.appendChild(projectImage);

  const projectBody = document.createElement("div");

  const projectHeader = document.createElement("div");

  const projectIcons = document.createElement("div");

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

function createAboutSection() {
  const aboutSectionImage = document.createElement("div");
  const profilePicture = document.createElement("img");

  aboutSectionImage.appendChild(profilePicture);

  const title = document.createElement("div");
  title.textContent = "About me";

  const body = document.createElement("div");
  body.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const icons = document.createElement("div");

  const githubIcon = document.createElement("i");
  githubIcon.className = "devicon-github-original colored";

  const linkedinIcon = document.createElement("i");
  linkedinIcon.className = "devicon-linkedin-plain colored";

  const twitterIcon = document.createElement("i");
  twitterIcon.className = "devicon-twitter-original colored";

  icons.appendChild(githubIcon);
  icons.appendChild(linkedinIcon);
  icons.appendChild(twitterIcon);

  const aboutSectionBody = document.createElement("div");

  aboutSectionBody.appendChild(title);
  aboutSectionBody.appendChild(body);
  aboutSectionBody.appendChild(icons);

  const container = document.createElement("div");

  container.appendChild(aboutSectionImage);
  container.appendChild(aboutSectionBody);

  return container;
}

function createContactSection() {}

module.exports = { createProjectSection, createAboutSection };
