const { array1, array2 } = require("./common");

function execute() {
  const newArr = []

  array1.forEach((entry) => {
    newArr.push(entry)
  })

  array2.forEach((entry) => {
    newArr.push(entry)
  })

  return newArr
}

module.exports = {
  execute,
};

// Latest results: xxx nanoseconds
