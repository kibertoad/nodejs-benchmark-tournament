function outputResults(benchmark, benchmarkResults) {
    console.log(
        `Mean time for ${
            benchmark.benchmarkEntryName
        } is ${benchmarkResults.meanTime.getTimeInNanoSeconds()} nanoseconds`
    );
}

module.exports = {
    outputResults
}
