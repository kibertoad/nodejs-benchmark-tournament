const { validateAccuracy } = require("./contestants/common");
const { outputResults } = require("../common/src/resultUtils");
const { resolveContestant } = require("../common/src/contestantResolver");
const { getCommonBuilder } = require("../common/src/commonBuilder");
const { createNew: classesCreateNew } = require("./contestants/classes");
const { createNew: pojosCreateNew } = require("./contestants/pojos");

const BENCHMARK_ID = "Create_DTO";
const CLASSES_ID = "classes";
const POJOS_ID = "pojos";

const contestants = {
  [CLASSES_ID]: measureClasses,
  [POJOS_ID]: measurePojos,
};

validateAccuracy(classesCreateNew());
validateAccuracy(pojosCreateNew());

function measureClasses() {
  const benchmark = getCommonBuilder()
    .benchmarkName(BENCHMARK_ID)
    .benchmarkEntryName(CLASSES_ID)
    .functionUnderTest(classesCreateNew)
    .build();
  const benchmarkResults = benchmark.execute();
  outputResults(benchmark, benchmarkResults);
}

function measurePojos() {
  const benchmark = getCommonBuilder()
    .benchmarkName(BENCHMARK_ID)
    .benchmarkEntryName(POJOS_ID)
    .functionUnderTest(pojosCreateNew)
    .build();
  const benchmarkResults = benchmark.execute();
  outputResults(benchmark, benchmarkResults);
}

const contestant = resolveContestant(contestants);
contestant();
