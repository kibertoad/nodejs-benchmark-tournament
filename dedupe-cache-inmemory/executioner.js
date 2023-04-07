const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { get: layeredLoaderLruGetFn, execute: layeredLoaderLruFn } = require("./contestants/layered-loader-lru");
const { get: layeredLoaderFifoGetFn, execute: layeredLoaderFifoFn } = require("./contestants/layered-loader-fifo");
const { get: dataLoaderGetFn, execute: dataLoaderFn } = require("./contestants/dataloader");
const {
  get: asyncCacheDedupeGetFn, execute: asyncCacheDedupeFn,
} = require("./contestants/async-cache-dedupe");

const { validateAccuracy } = require("./contestants/common");

const benchParams = {
  warmup: 1000,
  cycles: 2000
}

const contestants = {
  _layeredLoaderLru: getMeasureFn("layered-loader-lru", layeredLoaderLruFn, benchParams),
  _layeredLoaderFifo: getMeasureFn("layered-loader-fifo", layeredLoaderFifoFn, benchParams),
  _dataLoader: getMeasureFn("dataloader", dataLoaderFn, benchParams),
  _asyncCacheDedupe: getMeasureFn("async-cache-dedupe", asyncCacheDedupeFn, benchParams),
};

Promise.all([
  validateAccuracy(layeredLoaderLruGetFn),
  validateAccuracy(layeredLoaderFifoGetFn),
  validateAccuracy(dataLoaderGetFn),
  validateAccuracy(asyncCacheDedupeGetFn),
]).then(() => {
  const contestant = resolveContestant(contestants);
  contestant();
});
