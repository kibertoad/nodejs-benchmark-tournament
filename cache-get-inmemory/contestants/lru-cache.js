const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { LRUCache } = require('lru-cache')

const cache = new LRUCache({
    max: MAX_ITEMS,
    ttl: TTL,
})

async function execute() {
  for (var x = 0; x < ELEMENT_COUNT; x++) {
    const value = cache.get(x.toString())
    if (!value) {
      const newValue = {
        id: x
      }

      cache.set(x.toString(), newValue)
    }
  }
}

async function get(key) {
  const value = cache.get(key)
  if (!value) {
    const newValue = {
      id: key
    }

    cache.set(key, newValue)
    return newValue
  }

  return value
}

module.exports = {
  get,
  execute,
};

