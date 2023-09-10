const { resolveContestant } = require('../common/src/contestantResolver')
const { getMeasureFn } = require('../common/src/executionUtils')

const {
  get: layeredLoaderTwoLayerRefreshGetFn,
  execute: layeredLoaderTwoLayerRefreshFn,
  destroyContextTLLLRefresh,
} = require('./contestants/layered-loader-two-layers-refresh')
const { get: layeredLoaderGetFn, execute: layeredLoaderFn } = require('./contestants/layered-loader')
const {
  get: layeredLoaderRefreshGetFn,
  execute: layeredLoaderRefreshFn,
  destroyContextLLRefresh,
} = require('./contestants/layered-loader-refresh')
const { get: asyncCacheDedupeGetFn, execute: asyncCacheDedupeFn } = require('./contestants/async-cache-dedupe')
const { get: noDedupeGetFn, execute: noDedupeFn } = require('./contestants/no-dedupe-redis')
const {
  get: cacheManagerGetFn,
  execute: cacheManagerFn,
  initContextCacheManager,
  destroyContextCacheManager,
} = require('./contestants/cache-manager')

const { validateAccuracy, init, initContext, closeContext } = require('./contestants/common')

const benchParams = {
  warmup: 50,
  cycles: 100,
  cycleSamples: 10,
}

const contestants = {
  _layeredLoaderTwoLayerRefresh: getMeasureFn(
    'layered-loader-two-layer-refresh',
    layeredLoaderTwoLayerRefreshFn,
    benchParams,
  ),
  _layeredLoader: getMeasureFn('layered-loader', layeredLoaderFn, benchParams),
  _layeredLoaderRefresh: getMeasureFn('layered-loader-refresh', layeredLoaderRefreshFn, benchParams),
  _asyncCacheDedupe: getMeasureFn('async-cache-dedupe', asyncCacheDedupeFn, benchParams),
  _cacheManager: getMeasureFn('cache-manager', cacheManagerFn, benchParams),
  _noDedupe: getMeasureFn('no-dedupe-redis', noDedupeFn, benchParams),
}

initContext()
  .then(() => {
    return initContextCacheManager()
  })
  .then(() => {
    return Promise.all([
      validateAccuracy(layeredLoaderGetFn),
      validateAccuracy(layeredLoaderRefreshGetFn),
      validateAccuracy(layeredLoaderTwoLayerRefreshGetFn),
      validateAccuracy(asyncCacheDedupeGetFn),
      validateAccuracy(cacheManagerGetFn),
      validateAccuracy(noDedupeGetFn),
    ])
  })
  .then(() => {
    const contestant = resolveContestant(contestants)
    return contestant()
  })
  .finally(async () => {
    await destroyContextLLRefresh()
    await destroyContextTLLLRefresh()
    await closeContext()
    await destroyContextCacheManager()
  })
