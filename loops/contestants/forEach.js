const { values } = require("./common");

function execute() {
  let sum = 0;
  values.forEach((value) => {
    sum = sum + value;
  });
  return sum
}

module.exports = {
  execute,
};

// Latest results: 271 nanoseconds
