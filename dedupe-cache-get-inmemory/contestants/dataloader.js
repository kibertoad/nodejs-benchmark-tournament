const { MAX_ITEMS, TTL, ELEMENT_COUNT, CONCURRENCY, ids, loadFn, batchLoadFn } = require('./common')
const DataLoader = require('dataloader')
const { PromisePool } = require('@supercharge/promise-pool')

const loader = new DataLoader((params) => {
  return batchLoadFn(params)
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
