const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");

const { execute: layeredLoaderManyFn } = require("./contestants/layered-loader-many");
const { execute: layeredLoaderSingleFn } = require("./contestants/layered-loader-single");
const { execute: asyncCacheDedupeFn } = require("./contestants/async-cache-dedupe-single");

const { validateAccuracy, initContext, closeContext } = require("./contestants/common");

const benchParams = {
  warmup: 300,
  cycles: 100,
}

const contestants = {
  _layeredLoaderMany: getMeasureFn("layered-loader-many", layeredLoaderManyFn, benchParams),
  _layeredLoaderSingle: getMeasureFn("layered-loader-single", layeredLoaderSingleFn, benchParams),
  _asynccachededupe: getMeasureFn("async-cache-dedupe", asyncCacheDedupeFn, benchParams),
};


initContext()
  .then(() => {
    return Promise.all([
      validateAccuracy(layeredLoaderManyFn),
      validateAccuracy(layeredLoaderSingleFn),
      validateAccuracy(asyncCacheDedupeFn),
    ])
  })
  .then(() => {
    const contestant = resolveContestant(contestants)
    return contestant()
  })
  .finally(async () => {
    await closeContext()
  })
