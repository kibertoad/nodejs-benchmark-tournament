const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { execute: layeredLoaderLruObjectFn } = require("./contestants/layered-loader-lru-object");
const { execute: layeredLoaderFifoObjectFn } = require("./contestants/layered-loader-fifo-object");
const { execute: dataLoaderFn } = require("./contestants/dataloader");

const { validateAccuracy } = require("./contestants/common");

const benchParams = {
  warmup: 300,
  cycles: 100,
}

const contestants = {
  _layeredLoaderLruObject: getMeasureFn("layered-loader-lru-object", layeredLoaderLruObjectFn, benchParams),
  _layeredLoaderFifoObject: getMeasureFn("layered-loader-fifo-object", layeredLoaderFifoObjectFn, benchParams),
  _dataLoader: getMeasureFn("dataloader", dataLoaderFn, benchParams),
};

Promise.all([
  validateAccuracy(layeredLoaderLruObjectFn),
  validateAccuracy(layeredLoaderFifoObjectFn),
  validateAccuracy(dataLoaderFn),
]).then(() => {
  const contestant = resolveContestant(contestants);
  contestant();
});
