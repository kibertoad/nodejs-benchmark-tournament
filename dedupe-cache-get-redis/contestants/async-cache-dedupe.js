const { redis, MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn } = require('./common')
const { createCache } = require('async-cache-dedupe')
const { PromisePool } = require('@supercharge/promise-pool')

const cache = createCache({
  ttl: Math.round(TTL / 1000), // seconds
  storage: { type: 'redis', options: { size: MAX_ITEMS, client: redis } },
})

cache.define('fetchSomething', (params) => {
  return loadFn(params)
})

async function execute() {
  await PromisePool.withConcurrency(CONCURRENCY)
    .for(ids)
    .process(async (id) => {
      return cache.fetchSomething({
        orgId: 123,
        id: id,
      })
    })
}

async function get(params) {
  const { results } = await PromisePool.withConcurrency(CONCURRENCY)
    .for([ids[0]])
    .process(async (id) => {
      return cache.fetchSomething({
        orgId: 123,
        id: id,
      })
    })

  return results[0]
}

module.exports = {
  get,
  execute,
}
