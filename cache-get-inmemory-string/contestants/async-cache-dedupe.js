const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { createCache } = require("async-cache-dedupe");

const cache = createCache({
  ttl: Math.round(TTL / 1000), // seconds
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
    await cache.fetchSomething(`id: ${x}`);
  }
}

function get(key) {
  return cache.fetchSomething(key.toString());
}

module.exports = {
  get,
  execute
};

