const { validateEqualArrays } = require("validation-utils/dist/lib/validation.helper");

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
  validateAccuracy,
  ids,
  generateValues,
};
