const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn, redis } = require('./common')
const { Loader, RedisCache } = require('layered-loader')
const { PromisePool } = require('@supercharge/promise-pool')

const loadingOperation = new Loader({
  asyncCache: new RedisCache(redis, {
    ttlInMsecs: TTL,
    ttlLeftBeforeRefreshInMsecs: Math.round(TTL / 4),
    ttlCacheTtl: TTL,
    ttlCacheSize: MAX_ITEMS,
    json: true,
  }),
  dataSources: [
    {
      get(key, loadParams) {
        return loadFn(loadParams)
      },
    },
  ],
})

async function execute() {
  await PromisePool.withConcurrency(CONCURRENCY)
    .for(ids)
    .process(async (key) => {
      return loadingOperation.getAsyncOnly(key, {
        orgId: 123,
        id: key,
      })
    })
}

async function get(key) {
  const { results } = await PromisePool.withConcurrency(CONCURRENCY)
    .for([ids[0]])
    .process(async (key) => {
      return loadingOperation.getAsyncOnly(key, {
        orgId: 123,
        id: key,
      })
    })

  return results[0]
}

async function destroyContext() {
  await loadingOperation.close()
}

module.exports = {
  get,
  execute,
  destroyContextLLRefresh: destroyContext,
}
