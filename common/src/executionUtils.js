const { getCommonBuilder } = require("./commonBuilder");
const { outputResults } = require("./resultUtils");

function getMeasureFn(constestandId, fn, paramOverrides = {}) {
  return async () => {
    const benchmarkBuilder = getCommonBuilder()
        .benchmarkEntryName(constestandId)
        .asyncFunctionUnderTest(fn)

    if (paramOverrides.warmup) {
      benchmarkBuilder.warmupCycles(paramOverrides.warmup)
    }
    if (paramOverrides.cycles) {
      benchmarkBuilder.benchmarkCycles(paramOverrides.cycles)
    }

    const benchmark = benchmarkBuilder.build();

    const benchmarkResults = await benchmark.executeAsync();
    outputResults(benchmark, benchmarkResults);
  };
}

module.exports = {
  getMeasureFn,
};
