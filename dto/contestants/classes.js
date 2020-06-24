class Person {
  constructor() {
    this.name = "name";
    this.age = 21;
    this.profession = "stargazer";
    this.eyes = "blue";
    this.haircut = "short";
  }
}

function createNew() {
  return new Person();
}

module.exports = {
  createNew,
};
