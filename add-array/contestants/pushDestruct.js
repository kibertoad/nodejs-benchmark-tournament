const { array1, array2 } = require("./common");

function execute() {
  const newArr = [...array1]

  newArr.push(...array2)

  return newArr
}

module.exports = {
  execute,
};

// Latest results: 587 nanoseconds
