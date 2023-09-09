const { MAX_ITEMS, TTL, ELEMENT_COUNT, generateValues, ids } = require("./common");
const { Loader } = require('layered-loader')

const loader = new Loader({
  inMemoryCache: {
    cacheType: 'fifo-object',
    maxItems: MAX_ITEMS,
    ttlInMsecs: TTL,
  },
  dataSources: [{
    getMany(keys) {
      return Promise.resolve(generateValues(keys))
    }
  }]
})

function execute() {
  return loader.getMany(ids, (entry) => entry)
}

module.exports = {
  execute,
};

