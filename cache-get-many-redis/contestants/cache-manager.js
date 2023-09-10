const { redisOptions, TTL, ids, values } = require('./common')

const { MAX_ITEMS, TTLds, loadFn } = require('./common')
const { caching } = require('cache-manager')
const { redisStore } = require('cache-manager-ioredis-yet')

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
      const value = (await redisCache.store.mget(...ids)).filter((entry) => { return entry != null })

      if (value.length === ids.length) {
        return value
      }

      if (value.length < ids.length) {
        await redisCache.store.mset(
          ids.map((entry) => {
            return [entry, entry]
          })
        )
      }
      return values
}

module.exports = {
  execute,
  initContextCacheManager: initContext,
  destroyContextCacheManager: destroyContext,
}
