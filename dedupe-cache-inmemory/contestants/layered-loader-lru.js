const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const { LoadingOperation } = require('layered-loader')

const loadingOperation = new LoadingOperation({
  inMemoryCache: {
    maxItems: MAX_ITEMS,
    ttlInMsecs: TTL,
  },
  loaders: [{
    get(key) {
      return Promise.resolve({
        id: key
      })
    }
  }]
})

/*
for (var x = 0; x < ELEMENT_COUNT; x++) {
  loadingOperation.get(x.toString())
}
 */

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

