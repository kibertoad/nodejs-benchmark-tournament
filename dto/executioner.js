const { outputResults } = require("../common/resultUtils");
const { resolveContestant } = require("../common/contestantResolver");
const { getBuilder } = require("../common/commonBuilder");
const { createNew: classesCreateNew } = require("./contestants/classes");
const { createNew: pojosCreateNew } = require("./contestants/pojos");

const contestants = {
  classes: measureClasses,
  pojos: measurePojos,
};

function measureClasses() {
  const benchmark = getBuilder().functionUnderTest(classesCreateNew).build();
  const benchmarkResults = benchmark.execute();
  outputResults(benchmark, benchmarkResults);
}

function measurePojos() {
  const benchmark = getBuilder().functionUnderTest(pojosCreateNew).build();
  const benchmarkResults = benchmark.execute();
  outputResults(benchmark, benchmarkResults);
}

const contestant = resolveContestant(contestants);
contestant();
