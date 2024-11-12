class Project {
  #name;
  #description;
  #imageSrc;

  constructor(name, description, imageSrc) {
    this.#name = name;
    this.#description = description;
    this.#imageSrc = imageSrc;
  }

  get name() {
    return this.#name;
  }

  get description() {
    return this.#description;
  }

  get imageSrc() {
    return this.#imageSrc;
  }
}

module.exports = { Project };
