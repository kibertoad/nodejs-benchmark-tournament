const { array1, array2 } = require("./common");

function execute() {
  const newArr = []

  for (let i = 0; i < array1.length; i++) {
    newArr.push(array1[i])
  }
  for (let i = 0; i < array2.length; i++) {
    newArr.push(array2[i])
  }

  return newArr
}

module.exports = {
  execute,
};

// Latest results: xxx nanoseconds
