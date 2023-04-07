const { MAX_ITEMS, TTL, ELEMENT_COUNT } = require("./common");
const DataLoader = require("dataloader");

const loader = new DataLoader(
  (keys) => {
  return Promise.resolve([{
    id: keys[0]
  }]);
});

async function execute() {
  for (var x = 0; x < ELEMENT_COUNT; x++) {
    await loader.load(x.toString());
  }
}

function get(key) {
  return loader.load(key.toString());
}

module.exports = {
  get,
  execute
};

