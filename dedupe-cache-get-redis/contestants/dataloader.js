const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn, batchLoadFn, redis } = require('./common')
const DataLoader = require('dataloader')
const { PromisePool } = require('@supercharge/promise-pool')

// ToDo, this is trickier than it looks
const loader = new DataLoader(async (params) => {
  const keys = params.map((paramEntry) => { return `${paramEntry.id}_${paramEntry.orgId}` })
  const value = await redis.mget(keys)
  if (value) {
    return value.map(JSON.parse)
  }

  const result = await batchLoadFn(params)

  const msetParams = result.reduce((acc, value, index) => {
    acc.push(keys[index])
    acc.push(result[index])
    return acc
  }, [])

  await redis.mset(msetParams)
  return result
})

async function execute() {
  await PromisePool.withConcurrency(CONCURRENCY)
    .for(ids)
    .process(async (id) => {
      return loader.load({
        orgId: 123,
        id: id,
      })
    })
}

async function get(key) {
  const { results } = await PromisePool.withConcurrency(CONCURRENCY)
    .for([ids[0]])
    .process(async (id) => {
      return loader.load({
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
