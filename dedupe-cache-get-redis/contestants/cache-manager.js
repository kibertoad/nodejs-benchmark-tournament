const { redisOptions } = require('./common')

const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn, batchLoadFn, redis } = require('./common')
const { caching } = require('cache-manager')
const { redisStore } = require('cache-manager-ioredis-yet')
const { PromisePool } = require('@supercharge/promise-pool')

let redisCache

async function initContext() {
  redisCache = await caching(redisStore, {
    ...redisOptions,
    ttl: TTL,
    max: MAX_ITEMS,
  })
}

async function destroyContext() {
  await redisCache.store.client.disconnect()
}

async function execute() {
  await PromisePool.withConcurrency(CONCURRENCY)
    .for(ids)
    .process(async (id) => {
      const value = await redisCache.get(id)

      if (value) {
        return value
      }

      if (!value) {
        await redisCache.set(
          id,
          loadFn({
            orgId: 123,
            id: id,
          }),
        )
      }
    })
}

async function get(params) {
  const { results } = await PromisePool.withConcurrency(CONCURRENCY)
    .for([ids[0]])
    .process(async (id) => {
      const value = await redisCache.get(id)

      if (value) {
        return value
      }

      if (!value) {
        const newValue = await loadFn({
          orgId: 123,
          id: id,
        })
        await redisCache.set(id, newValue)
        return newValue
      }
    })

  return results[0]
}

module.exports = {
  get,
  execute,
  initContextCacheManager: initContext,
  destroyContextCacheManager: destroyContext,
}
