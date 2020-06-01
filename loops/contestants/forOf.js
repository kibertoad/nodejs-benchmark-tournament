const { values } = require("./common");

function execute() {
  let sum = 0;
  for (let i of values) {
    sum = sum + i;
  }
  return sum;
}

module.exports = {
  execute,
};

// Latest results: 382 nanoseconds
