const {
  matchingString1,
  matchingString2,
  matchingString3,
  matchingString4,
  objectMap
} = require("./common");

function testString(key) {
  return key in objectMap;
}

function execute() {
  const result1 = testString(matchingString1);
  const result2 = testString(matchingString2);
  const result3 = testString(matchingString3);
  const result4 = testString(matchingString4);

  return {
    result1,
    result2,
    result3,
    result4,
  };
}

module.exports = {
  execute,
};
