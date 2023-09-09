const { validateEqual } = require("validation-utils");
const { validateEqualArrays } = require("validation-utils/dist/lib/validation.helper");

const MAX_ITEMS = 10000
const TTL = 1000 * 60 * 60
const ELEMENT_COUNT = 5000

function generateIds(amount) {
  const result = []
  for (let i = 1; i <= amount; i++) {
    result.push(i)
  }
  return result
}

function generateValues(ids) {
  return ids.map((entry) => {
    return entry
  })
}

const ids = generateIds(20000)
const values = generateValues(ids)

async function validateAccuracy(executeFn) {
  const value = await executeFn()
  validateEqualArrays(value, values)
}

module.exports = {
  ELEMENT_COUNT,
  MAX_ITEMS,
  TTL,
  validateAccuracy,
  ids,
  generateValues,
};
