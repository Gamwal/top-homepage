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

function createAboutSection() {
  const aboutSectionImage = document.createElement("div");

  const profilePicture = document.createElement("img");
  profilePicture.src = "../images/placeholder.png";

  aboutSectionImage.appendChild(profilePicture);

  const title = document.createElement("div");
  title.className = "title";
  title.classList.add("title");
  title.textContent = "About me";

  const body = document.createElement("div");
  body.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  const icons = document.createElement("div");

  const githubIcon = document.createElement("i");
  githubIcon.className = "devicon-github-original colored";

  const linkedinIcon = document.createElement("i");
  linkedinIcon.className = "devicon-linkedin-plain";

  const twitterIcon = document.createElement("i");
  twitterIcon.className = "devicon-twitter-original colored";

  icons.appendChild(githubIcon);
  icons.appendChild(linkedinIcon);
  icons.appendChild(twitterIcon);

  const aboutSectionBody = document.createElement("div");
  aboutSectionBody.className = "about-section-content";
  aboutSectionBody.appendChild(title);
  aboutSectionBody.appendChild(body);
  aboutSectionBody.appendChild(icons);

  const container = document.createElement("div");
  container.id = "about-section";

  container.appendChild(aboutSectionImage);
  container.appendChild(aboutSectionBody);

  return container;
}

function createContactSection() {
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Contact me";

  const body = document.createElement("div");

  const paragraphOne = document.createElement("div");
  paragraphOne.textContent =
    "Please get in touch if you think our work could be mutually beneficial!";

  const address = document.createElement("div");
  const addressLineOne = document.createElement("div");
  const addressLineTwo = document.createElement("div");

  addressLineOne.textContent = "1234 Random Road";
  addressLineTwo.textContent = "Random Town, California 12345";

  address.appendChild(addressLineOne);
  address.appendChild(addressLineTwo);

  const telephone = document.createElement("div");
  telephone.className = "telephone";

  const teleIcon = document.createElement("img");
  teleIcon.src = "../icons/phone.svg";

  const teleNo = document.createElement("div");
  teleNo.textContent = "555-555-5555";

  telephone.appendChild(teleIcon);
  telephone.appendChild(teleNo);

  const email = document.createElement("div");
  email.className = "email";

  const emailIcon = document.createElement("img");
  emailIcon.src = "../icons/email-outline.svg";

  const emailAddress = document.createElement("div");
  emailAddress.textContent = "adungamaliel@yahoo.com";

  email.appendChild(emailIcon);
  email.appendChild(emailAddress);

  const icons = document.createElement("div");
  icons.className = "contact-icons";

  const githubIcon = document.createElement("i");
  githubIcon.className = "devicon-github-original colored";

  const linkedinIcon = document.createElement("i");
  linkedinIcon.className = "devicon-linkedin-plain";

  const twitterIcon = document.createElement("i");
  twitterIcon.className = "devicon-twitter-original colored";

  icons.appendChild(githubIcon);
  icons.appendChild(linkedinIcon);
  icons.appendChild(twitterIcon);

  const contactImageHolder = document.createElement("div");
  contactImageHolder.className = "contact-section-image";

  contactImageHolder.style.backgroundImage = 'url("../images/placeholder.png")';
  contactImageHolder.style.backgroundSize = "cover";

  // const contactImage = document.createElement("img");
  // contactImage.src = "../images/placeholder.png";

  // contactImageHolder.appendChild(contactImage);

  const container = document.createElement("div");
  container.id = "contact-section";

  const contactBody = document.createElement("div");
  contactBody.className = "content-section-about";

  contactBody.appendChild(title);
  contactBody.appendChild(paragraphOne);
  contactBody.appendChild(address);
  contactBody.appendChild(telephone);
  contactBody.appendChild(email);
  contactBody.appendChild(icons);

  container.appendChild(contactBody);
  container.appendChild(contactImageHolder);

  return container;
}

module.exports = {
  createProjectSection,
  createAboutSection,
  createContactSection,
};
