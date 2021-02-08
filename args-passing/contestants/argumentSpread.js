const { testFn } = require("./common");

function execute() {
  return internalFunction(100, 1000, 'abcdef')
}

function internalFunction() {
  return testFn(...arguments)
}

module.exports = {
  execute,
};

// 0.000050 msecs
