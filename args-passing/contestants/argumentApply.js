const { testFn } = require("./common");

function execute() {
  return internalFunction(100, 1000, 'abcdef')
}

function internalFunction() {
  return testFn.apply(null, arguments)
}

module.exports = {
  execute,
};

// Latest results: 0.000048 msecs
