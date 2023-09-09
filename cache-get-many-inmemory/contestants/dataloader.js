const { ids, generateValues } = require("./common");
const DataLoader = require("dataloader");

const loader = new DataLoader(
  (keys) => {
    return Promise.resolve(generateValues(keys))
});

function execute() {
  return loader.loadMany(ids)
}

module.exports = {
  execute
};

