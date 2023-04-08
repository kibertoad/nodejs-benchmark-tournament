const { resolveContestant } = require('../common/src/contestantResolver')
const { getMeasureFn } = require('../common/src/executionUtils')

const {
  get: layeredLoaderTwoLayerRefreshGetFn,
  execute: layeredLoaderTwoLayerRefreshFn,
} = require('./contestants/layered-loader-two-layers-refresh')
const { get: layeredLoaderGetFn, execute: layeredLoaderFn } = require('./contestants/layered-loader')
const {
  get: layeredLoaderRefreshGetFn,
  execute: layeredLoaderRefreshFn,
} = require('./contestants/layered-loader-refresh')
const { get: dataLoaderGetFn, execute: dataLoaderFn } = require('./contestants/dataloader')
const { get: asyncCacheDedupeGetFn, execute: asyncCacheDedupeFn } = require('./contestants/async-cache-dedupe')
const { get: noDedupeGetFn, execute: noDedupeFn } = require('./contestants/no-dedupe-redis')

const { validateAccuracy, init, initContext, closeContext } = require('./contestants/common')

const benchParams = {
  warmup: 10,
  cycles: 50,
  cycleSamples: 10,
}

const contestants = {
  _layeredLoaderTwoLayerRefresh: getMeasureFn(
    'layered-loader-two-layer-refresh',
    layeredLoaderTwoLayerRefreshFn,
    benchParams
  ),
  _layeredLoader: getMeasureFn('layered-loader', layeredLoaderFn, benchParams),
  _layeredLoaderRefresh: getMeasureFn('layered-loader-refresh', layeredLoaderRefreshFn, benchParams),
  _dataLoader: getMeasureFn('dataloader', dataLoaderFn, benchParams),
  _asyncCacheDedupe: getMeasureFn('async-cache-dedupe', asyncCacheDedupeFn, benchParams),
  _noDedupe: getMeasureFn('no-dedupe-redis', noDedupeFn, benchParams),
}

initContext()
  .then(() => {
    return Promise.all([
      validateAccuracy(layeredLoaderGetFn),
      validateAccuracy(layeredLoaderRefreshGetFn),
      validateAccuracy(layeredLoaderTwoLayerRefreshGetFn),
//      validateAccuracy(dataLoaderGetFn),
      validateAccuracy(asyncCacheDedupeGetFn),
      validateAccuracy(noDedupeGetFn),
    ])
  })
  .then(() => {
    const contestant = resolveContestant(contestants)
    return contestant()
  })
  .finally(async () => {
    await closeContext()
  })
