const { validateEqual  } = require("validation-utils");

function validateAccuracy(createdValue) {
  validateEqual(createdValue.name, "name");
  validateEqual(createdValue.age, 21);
  validateEqual(createdValue.profession, "stargazer");
  validateEqual(createdValue.eyes, "blue");
  validateEqual(createdValue.haircut, "short");
}

module.exports = {
  validateAccuracy,
};
