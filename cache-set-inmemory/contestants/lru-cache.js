const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { LRUCache } = require("lru-cache");

async function execute() {
  const cache = new LRUCache({
    max: MAX_ITEMS,
    ttl: TTL,
  });
  for (var x = 0; x < ELEMENT_COUNT; x++) {
    cache.set(x.toString(), {
      id: x,
    });
  }
}

async function get(key) {
  const cache = new LRUCache({
    max: MAX_ITEMS,
    ttl: TTL,
  });
  const newValue = {
    id: key,
  };

  cache.set(key, newValue);
  return newValue;
}

module.exports = {
  get,
  execute,
};
