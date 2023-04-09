const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { LruObject } = require('toad-cache')

async function execute() {
  const cache = new LruObject(MAX_ITEMS, TTL)
  for (var x = 0; x < ELEMENT_COUNT; x++) {
    cache.set(x.toString(), {
      id: x,
    });
  }
}

async function get(key) {
  const cache = new LruObject(MAX_ITEMS, TTL)
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

