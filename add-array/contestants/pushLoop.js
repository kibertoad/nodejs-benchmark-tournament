const { array1, array2 } = require("./common");

function execute() {
  const newArr = [...array1]

  for (let i = 0; i < array2.length; i++) {
    newArr.push(array2[i])
  }

  return newArr
}

module.exports = {
  execute,
};

// Latest results: xxx nanoseconds
