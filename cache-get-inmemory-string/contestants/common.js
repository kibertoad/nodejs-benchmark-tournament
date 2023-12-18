const { validateEqual } = require("validation-utils");

const MAX_ITEMS = 5000
const TTL = 1000 * 60 * 60
const ELEMENT_COUNT = 8500

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
