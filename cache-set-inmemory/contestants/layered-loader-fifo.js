const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { Loader } = require('layered-loader')

function createCache() {
  return new Loader({
    inMemoryCache: {
      cacheType: 'fifo',
      maxItems: MAX_ITEMS,
      ttlInMsecs: TTL,
    },
    dataSources: [{
      get(key) {
        return Promise.resolve({
          id: key
        })
      }
    }]
  })
}

async function execute() {
  const loadingOperation = createCache()

  for (var x = 0; x < ELEMENT_COUNT; x++) {
    loadingOperation.getInMemoryOnly(x.toString()) || await loadingOperation.getAsyncOnly(x.toString());
  }
}

async function get(key) {
  const loadingOperation = createCache()

  return loadingOperation.getInMemoryOnly(key.toString()) || await loadingOperation.getAsyncOnly(key.toString());
}

module.exports = {
  get,
  execute,
};

