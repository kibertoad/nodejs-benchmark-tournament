const { redis, ids, TTL,  } = require('./common')
const { createCache } = require('async-cache-dedupe')

const cache = createCache({
  ttl: TTL,
  storage: { type: 'redis', options: { size: 100000, client: redis } },
})

cache.define('fetchSomething', (params) => {
  return params
})

async function execute() {
   return Promise.all(ids.map((id) => cache.fetchSomething(id)))
}

module.exports = {
  execute,
}
