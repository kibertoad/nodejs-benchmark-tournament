const { validationHelper: validate } = require("validation-utils");

const matchingString1 = "application/json";
const matchingString2 = "application/ld+json";
const matchingString3 = "application/hal+json";
const matchingString4 = "application/vnd.api+json";
const nonMatchingString = "application/xml";

function validateAccuracy({ result1, result2, result3, result4, result5 }) {
  validate.truthy(result1);
  validate.truthy(result2);
  validate.truthy(result3);
  validate.truthy(result4);
  validate.falsy(result5);
}

module.exports = {
  matchingString1,
  matchingString2,
  matchingString3,
  matchingString4,
  nonMatchingString,
  validateAccuracy,
};
