const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn } = require('./common')
const { createCache } = require('async-cache-dedupe')
const { PromisePool } = require('@supercharge/promise-pool')

const cache = createCache({
  ttl: Math.round(TTL / 1000), // seconds
  storage: { type: 'memory', options: { size: MAX_ITEMS } },
  transformer: {
    serialize: (result) => result,
    deserialize: (serialized) => serialized,
  },
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
