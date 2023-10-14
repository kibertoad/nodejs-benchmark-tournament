const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { get: layeredLoaderLruGetFn, execute: layeredLoaderLruFn } = require("./contestants/layered-loader-lru");
const { get: layeredLoaderLruObjectGetFn, execute: layeredLoaderLruObjectFn } = require("./contestants/layered-loader-lru-object");
const { get: layeredLoaderFifoGetFn, execute: layeredLoaderFifoFn } = require("./contestants/layered-loader-fifo");
const { get: layeredLoaderFifoObjectGetFn, execute: layeredLoaderFifoObjectFn } = require("./contestants/layered-loader-fifo-object");
const { get: dataLoaderGetFn, execute: dataLoaderFn } = require("./contestants/dataloader");
const { get: toadCacheLruGetFn, execute: toadCacheLruFn } = require("./contestants/toad-cache-lru-object");
const { get: toadCacheLruMapGetFn, execute: toadCacheLruMapFn } = require("./contestants/toad-cache-lru-map");
const { get: tinyLruGetFn, execute: tinyLruFn } = require("./contestants/tiny-lru");
const {
  get: asyncCacheDedupeGetFn, execute: asyncCacheDedupeFn,
} = require("./contestants/async-cache-dedupe");

const { validateAccuracy } = require("./contestants/common");

const benchParams = {
  warmup: 200,
  cycles: 200,
}

const contestants = {
  _layeredLoaderLru: getMeasureFn("layered-loader-lru-map", layeredLoaderLruFn, benchParams),
  _layeredLoaderLruObject: getMeasureFn("layered-loader-lru-object", layeredLoaderLruObjectFn, benchParams),
  _layeredLoaderFifo: getMeasureFn("layered-loader-fifo-map", layeredLoaderFifoFn, benchParams),
  _layeredLoaderFifoObject: getMeasureFn("layered-loader-fifo-object", layeredLoaderFifoObjectFn, benchParams),
  _dataLoader: getMeasureFn("dataloader", dataLoaderFn, benchParams),
  _asyncCacheDedupe: getMeasureFn("async-cache-dedupe", asyncCacheDedupeFn, benchParams),
  _toadCacheLru: getMeasureFn("toad-cache-lru", toadCacheLruFn, benchParams),
  _toadCacheLruMap: getMeasureFn("toad-cache-lru-map", toadCacheLruMapFn, benchParams),
  _tinyLru: getMeasureFn("tiny-lru", tinyLruFn, benchParams),
};

Promise.all([
  validateAccuracy(layeredLoaderLruGetFn),
  validateAccuracy(layeredLoaderLruObjectGetFn),
  validateAccuracy(layeredLoaderFifoGetFn),
  validateAccuracy(layeredLoaderFifoObjectGetFn),
  validateAccuracy(dataLoaderGetFn),
  validateAccuracy(asyncCacheDedupeGetFn),
  validateAccuracy(toadCacheLruGetFn),
  validateAccuracy(toadCacheLruMapGetFn),
  validateAccuracy(tinyLruGetFn),
]).then(() => {
  const contestant = resolveContestant(contestants);
  contestant();
});
