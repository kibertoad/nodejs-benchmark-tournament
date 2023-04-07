const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { createCache } = require("async-cache-dedupe");

const cache = createCache({
  ttl: TTL, // seconds
  storage: { type: "memory", options: { size: MAX_ITEMS } },
  transformer: {
    serialize: (result) => result,
    deserialize: (serialized) => serialized,
  }
});

cache.define("fetchSomething", (k) => {
  return Promise.resolve({
    id: k
  });
});

async function execute() {
  for (var x = 0; x < ELEMENT_COUNT; x++) {
    await cache.fetchSomething(x.toString());
  }
}

function get(key) {
  return cache.fetchSomething(key.toString());
}

module.exports = {
  get,
  execute
};

