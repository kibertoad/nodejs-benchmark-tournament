const { redis, MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn } = require('./common')
const { PromisePool } = require('@supercharge/promise-pool')

async function execute() {
  await PromisePool.withConcurrency(CONCURRENCY)
    .for(ids)
    .process(async (id) => {
      const key = `${id}_123`
      const value = await redis.get(key)
      if (value) {
        return JSON.parse(value)
      }

      const newValue = await loadFn({
        orgId: 123,
        id: id,
      })
      await redis.set(key, JSON.stringify(newValue))
      return newValue
    })
}

async function get(key) {
  const { results } = await PromisePool.withConcurrency(CONCURRENCY)
    .for([ids[0]])
    .process(async (id) => {
      const key = `${id}_123`
      const value = await redis.get(key)
      if (value) {
        return JSON.parse(value)
      }

      const newValue = await loadFn({
        orgId: 123,
        id: id,
      })
      await redis.set(key, JSON.stringify(newValue))
      return newValue
    })

  return results[0]
}

module.exports = {
  get,
  execute,
}
