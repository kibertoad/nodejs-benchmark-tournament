const { testFn } = require("./common");

function execute() {
  return internalFunction(100, 1000, 'abcdef')
}

function internalFunction(...args) {
  return testFn(...args)
}

module.exports = {
  execute,
};

// 0.000057 msecs
