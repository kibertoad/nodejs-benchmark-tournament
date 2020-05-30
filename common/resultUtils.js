function outputResults(benchmark, benchmarkResults) {
    console.log(
        `Mean time for ${
            benchmark.name
        } is ${benchmarkResults.meanTime.getTimeInNanoSeconds()}`
    );
}

module.exports = {
    outputResults
}
