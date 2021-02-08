const { testFn } = require("./common");

function execute() {
  return internalFunction(100, 1000, 'abcdef')
}

function internalFunction() {
  const args = new Array(arguments.length);
  for (let i = 0; i < args.length; i++) {
    args[i] = arguments[i];
  }

  return testFn(...args)
}

module.exports = {
  execute,
};

// 0.000105 msecs
