const { BenchmarkBuilder } = require("photofinish");

function getBuilder() {
  const builder = new BenchmarkBuilder();
  return builder
    .warmupCycles(10000)
    .benchmarkCycles(100000)
    .benchmarkCycleSamples(50);
}

module.exports = {
  getBuilder,
};
