const { validateEqualArrays } = require("validation-utils/dist/lib/validation.helper");
const Redis = require("ioredis");

const redisOptions = {
  host: 'localhost',
  port: 6379,
  password: 'sOmE_sEcUrE_pAsS',
}
const redis = new Redis(redisOptions)

async function initContext() {
  await redis.flushall()
}

async function closeContext() {
  await redis.disconnect()
}


function generateIds(amount) {
  const result = []
  for (let i = 1; i <= amount; i++) {
    result.push(i.toString())
  }
  return result
}

function generateValues(ids) {
  return ids.map((entry) => {
    return entry
  })
}

const TTL = 5000
const MAX_ITEMS = 100000

const ids = generateIds(100)
const values = generateValues(ids)

async function validateAccuracy(executeFn) {
  const value = await executeFn()
  validateEqualArrays(value, values)
}

module.exports = {
  validateAccuracy,
  ids,
  MAX_ITEMS,
  generateValues,
  initContext,
  closeContext,
  redis,
  redisOptions,
  TTL,
  values
};
