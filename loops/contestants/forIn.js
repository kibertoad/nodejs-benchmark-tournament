const { values } = require("./common");

function execute() {
  let sum = 0;
  for (let i in values) {
    sum = sum + values[i];
  }
  return sum;
}

module.exports = {
  execute,
};

// Latest results: 4689 nanoseconds
