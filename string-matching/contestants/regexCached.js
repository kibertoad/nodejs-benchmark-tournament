const {
  nonMatchingString,
  matchingString1,
  matchingString2,
  matchingString3,
  matchingString4,
} = require("./common");

const regex = /^application\/(?:[.a-z-]+\+)?json/;

function testString(val) {
  return regex.test(val);
}

function execute() {
  const result1 = testString(matchingString1);
  const result2 = testString(matchingString2);
  const result3 = testString(matchingString3);
  const result4 = testString(matchingString4);
  const result5 = testString(nonMatchingString);

  return {
    result1,
    result2,
    result3,
    result4,
    result5,
  };
}

module.exports = {
  execute,
};
