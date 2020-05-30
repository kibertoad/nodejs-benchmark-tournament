function createPojo() {
  return {
    name: "name",
    age: 21,
    profession: "stargazer",
    eyes: "blue",
    haircut: "short",
  };
}

// Wrapped twice for fairness, as class constructor had to be wrapped to abstract away the `new` call
function createNew() {
  return createPojo();
}

module.exports = {
  createNew,
};
