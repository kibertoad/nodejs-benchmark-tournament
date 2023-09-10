const { TTL, ids, redis } = require("./common");
const { Loader, RedisCache } = require('layered-loader')

const loader = new Loader({
  asyncCache: new RedisCache(redis, {
    ttlInMsecs: TTL,
    json: false,
  }),
  dataSources: [{
    get(key) {
      return Promise.resolve(key)
    }
  }]
})

async function execute() {
  return Promise.all(ids.map((id) => loader.get(id)))
}

module.exports = {
  execute,
};

