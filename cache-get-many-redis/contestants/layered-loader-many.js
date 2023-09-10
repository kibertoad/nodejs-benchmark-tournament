const { TTL, ids, redis } = require("./common");
const { Loader, RedisCache } = require('layered-loader')

const loader = new Loader({
  asyncCache: new RedisCache(redis, {
    ttlInMsecs: TTL,
    json: false,
  }),
  dataSources: [{
    getMany(keys) {
      return Promise.resolve(keys)
    }
  }]

})

function execute() {
  return loader.getMany(ids, (entry) => entry)
}

module.exports = {
  execute,
};

