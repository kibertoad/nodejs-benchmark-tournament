const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { Loader } = require('layered-loader')

const loadingOperation = new Loader({
  inMemoryCache: {
    cacheType: 'fifo-map',
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

async function execute() {
  for (var x = 0; x < ELEMENT_COUNT; x++) {
    loadingOperation.getInMemoryOnly(x.toString()) || await loadingOperation.getAsyncOnly(x.toString());
  }
}

async function get(key) {
  return loadingOperation.getInMemoryOnly(key.toString()) || await loadingOperation.getAsyncOnly(key.toString());
}

module.exports = {
  get,
  execute,
};

