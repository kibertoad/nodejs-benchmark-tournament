const { values } = require("./common");

function execute() {
  const len = values.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + values[i];
  }
  return sum;
}

module.exports = {
  execute,
};

// Latest results: 222 nanoseconds
