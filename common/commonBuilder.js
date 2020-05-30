const { BenchmarkBuilder } = require("photofinish");

function getBuilder() {
  const builder = new BenchmarkBuilder();
  return builder
    .name("Classes")
    .warmupCycles(1000)
    .benchmarkCycles(100000)
    .benchmarkCycleSamples(50);
}

module.exports = {
  getBuilder,
};
