const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn, redis } = require('./common')
const { LoadingOperation, RedisCache } = require('layered-loader')
const { PromisePool } = require('@supercharge/promise-pool')

const loadingOperation = new LoadingOperation({
  asyncCache: new RedisCache(redis, {
    ttlInMsecs: TTL,
    json: true,
  }),
  loaders: [
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

module.exports = {
  get,
  execute,
}
