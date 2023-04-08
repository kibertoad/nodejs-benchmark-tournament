const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn } = require('./common')
const { lruObject } = require('toad-cache')
const { PromisePool } = require('@supercharge/promise-pool')

const cache = lruObject(MAX_ITEMS, TTL)

async function execute() {
  await PromisePool.withConcurrency(CONCURRENCY)
    .for(ids)
    .process(async (id) => {
      const key = `${id}_123`
      const value = cache.get(key)
      if (value) {
        return value
      }

      const newValue = await loadFn({
        orgId: 123,
        id: id,
      })
      cache.set(key, newValue)
      return newValue
    })
}

async function get(key) {
  const { results } = await PromisePool.withConcurrency(CONCURRENCY)
    .for([ids[0]])
    .process(async (id) => {
      const key = `${id}_123`
      const value = cache.get(key)
      if (value) {
        return value
      }

      const newValue = await loadFn({
        orgId: 123,
        id: id,
      })
      cache.set(key, newValue)
      return newValue
    })

  return results[0]
}

module.exports = {
  get,
  execute,
}
