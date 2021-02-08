const { validateEqual } = require("validation-utils");

function validateAccuracy(sum) {
  validateEqual(sum, `100 1000 abcdef`);
}

function testFn(param1, param2, param3) {
  return `${param1} ${param2} ${param3}`
}

module.exports = {
  validateAccuracy,
  testFn,
};
