const { values } = require("./common");

function execute() {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }
  return sum;
}

module.exports = {
  execute,
};

// Latest results: 224 nanoseconds
