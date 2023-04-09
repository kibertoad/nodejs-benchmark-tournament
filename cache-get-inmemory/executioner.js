const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { get: layeredLoaderLruGetFn, execute: layeredLoaderLruFn } = require("./contestants/layered-loader-lru-map");
const { get: layeredLoaderLruObjectGetFn, execute: layeredLoaderLruObjectFn } = require("./contestants/layered-loader-lru-object");
const { get: layeredLoaderFifoGetFn, execute: layeredLoaderFifoFn } = require("./contestants/layered-loader-fifo-map");
const { get: layeredLoaderFifoObjectGetFn, execute: layeredLoaderFifoObjectFn } = require("./contestants/layered-loader-fifo-object");
const { get: dataLoaderGetFn, execute: dataLoaderFn } = require("./contestants/dataloader");
const {
  get: asyncCacheDedupeGetFn, execute: asyncCacheDedupeFn,
} = require("./contestants/async-cache-dedupe");

const { validateAccuracy } = require("./contestants/common");

const benchParams = {
  warmup: 300,
  cycles: 500
}

const contestants = {
  _layeredLoaderLru: getMeasureFn("layered-loader-lru-map", layeredLoaderLruFn, benchParams),
  _layeredLoaderLruObject: getMeasureFn("layered-loader-lru-object", layeredLoaderLruObjectFn, benchParams),
  _layeredLoaderFifo: getMeasureFn("layered-loader-fifo-map", layeredLoaderFifoFn, benchParams),
  _layeredLoaderFifoObject: getMeasureFn("layered-loader-fifo-object", layeredLoaderFifoObjectFn, benchParams),
  _dataLoader: getMeasureFn("dataloader", dataLoaderFn, benchParams),
  _asyncCacheDedupe: getMeasureFn("async-cache-dedupe", asyncCacheDedupeFn, benchParams),
};

Promise.all([
  validateAccuracy(layeredLoaderLruGetFn),
  validateAccuracy(layeredLoaderLruObjectGetFn),
  validateAccuracy(layeredLoaderFifoGetFn),
  validateAccuracy(layeredLoaderFifoObjectGetFn),
  validateAccuracy(dataLoaderGetFn),
  validateAccuracy(asyncCacheDedupeGetFn),
]).then(() => {
  const contestant = resolveContestant(contestants);
  contestant();
});
