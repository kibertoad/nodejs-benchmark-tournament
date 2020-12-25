const { validateTruthy, validateFalsy } = require("validation-utils");

const matchingString1 = "application/json";
const matchingString2 = "application/ld+json";
const matchingString3 = "application/hal+json";
const matchingString4 = "application/vnd.api+json";
const nonMatchingString = "application/xml";

function validateAccuracy({ result1, result2, result3, result4, result5 }) {
  validateTruthy(result1);
  validateTruthy(result2);
  validateTruthy(result3);
  validateTruthy(result4);
  validateFalsy(result5);
}

module.exports = {
  matchingString1,
  matchingString2,
  matchingString3,
  matchingString4,
  nonMatchingString,
  validateAccuracy,
};
