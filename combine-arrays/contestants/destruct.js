const { array1, array2 } = require("./common");

function execute() {
  return [
    ...array1,
    ...array2
  ]
}

module.exports = {
  execute,
};

// Latest results: xxx nanoseconds
