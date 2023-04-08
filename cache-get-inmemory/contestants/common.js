const { validateEqual } = require("validation-utils");

const MAX_ITEMS = 10000
const TTL = 1000 * 60 * 60
const ELEMENT_COUNT = 5000

async function validateAccuracy(getFn) {
  const value = await getFn('123')
  validateEqual(value.id, '123')
}

module.exports = {
  ELEMENT_COUNT,
  MAX_ITEMS,
  TTL,
  validateAccuracy,
};
