const { BenchmarkBuilder } = require("photofinish");

function getCommonBuilder() {
  const builder = new BenchmarkBuilder();
  return builder
    .warmupCycles(10000)
    .benchmarkCycles(100000)
    .benchmarkCycleSamples(50);
}

module.exports = {
  getCommonBuilder,
};
