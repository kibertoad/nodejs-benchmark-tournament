const { validationHelper } = require("validation-utils");

function validateAccuracy(createdValue) {
  validationHelper.equal(createdValue.name, "name");
  validationHelper.equal(createdValue.age, 21);
  validationHelper.equal(createdValue.profession, "stargazer");
  validationHelper.equal(createdValue.eyes, "blue");
  validationHelper.equal(createdValue.haircut, "short");
}

module.exports = {
  validateAccuracy,
};
