const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { get: layeredLoaderGetFn, execute: layeredLoaderFn } = require("./contestants/layered-loader-lru");
const { get: dataLoaderGetFn, execute: dataLoaderFn } = require("./contestants/dataloader");
const {
  get: asyncCacheDedupeGetFn, execute: asyncCacheDedupeFn,
} = require("./contestants/async-cache-dedupe");

const { validateAccuracy } = require("./contestants/common");

const benchParams = {
  warmup: 500,
  cycles: 100
}

const contestants = {
  _layeredLoader: getMeasureFn("layered-loader", layeredLoaderFn, benchParams),
  _dataLoader: getMeasureFn("data-loader", dataLoaderFn, benchParams),
  _asyncCacheDedupe: getMeasureFn("async-cache-dedupe", asyncCacheDedupeFn, benchParams),
};

Promise.all([
  validateAccuracy(layeredLoaderGetFn),
  validateAccuracy(dataLoaderGetFn),
  validateAccuracy(asyncCacheDedupeGetFn),
]).then(() => {
  const contestant = resolveContestant(contestants);
  contestant();
});
