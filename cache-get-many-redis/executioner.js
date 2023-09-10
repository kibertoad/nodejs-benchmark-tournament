const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { execute: layeredLoaderManyFn } = require("./contestants/layered-loader-many");
const { execute: layeredLoaderSingleFn } = require("./contestants/layered-loader-single");
const { execute: asyncCacheDedupeFn } = require("./contestants/async-cache-dedupe-single");
const { execute: cacheManagerFn, destroyContextCacheManager, initContextCacheManager } = require("./contestants/cache-manager");

const { validateAccuracy, initContext, closeContext } = require("./contestants/common");

const benchParams = {
  warmup: 300,
  cycles: 100,
}

const contestants = {
  _layeredLoaderMany: getMeasureFn("layered-loader-many", layeredLoaderManyFn, benchParams),
  _layeredLoaderSingle: getMeasureFn("layered-loader-single", layeredLoaderSingleFn, benchParams),
  _asynccachededupe: getMeasureFn("async-cache-dedupe", asyncCacheDedupeFn, benchParams),
  _cacheManager: getMeasureFn("cache-manager", cacheManagerFn, benchParams),
};


initContext()
  .then(() => {
    return initContextCacheManager()
  })
  .then(() => {
    return Promise.all([
      validateAccuracy(layeredLoaderManyFn),
      validateAccuracy(layeredLoaderSingleFn),
      validateAccuracy(asyncCacheDedupeFn),
      validateAccuracy(cacheManagerFn),
    ])
  })
  .then(() => {
    const contestant = resolveContestant(contestants)
    return contestant()
  })
  .finally(async () => {
    await closeContext()
    await destroyContextCacheManager()
  })
