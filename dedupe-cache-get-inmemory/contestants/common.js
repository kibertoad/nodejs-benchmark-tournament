const { validateEqual } = require('validation-utils')
const { setTimeout } = require('timers/promises')

const MAX_ITEMS = 10000
const TTL = 1000
const ELEMENT_COUNT = 300
const LOADING_TIME_IN_MSECS = 200
const BULK_LOADING_TIME_IN_MSECS = 240

const CONCURRENCY = 200

function arrayRange(start, stop, step) {
  return Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step)
}

const uniqueIds = arrayRange(1, ELEMENT_COUNT, 1)
const allIds = uniqueIds.reduce((acc, id) => {
  acc.push(id)
  acc.push(id)
  acc.push(id)
  acc.push(id)
  if (id % 2 === 0) {
    acc.push(id)
    acc.push(id)
    acc.push(id)
  }

  return acc
}, [])

async function validateAccuracy(getFn) {
  const value = await getFn({
    orgId: 123,
    id: 456,
  })
  validateEqual(value.orgId, 123)
  validateEqual(value.id, 1)
}

async function loadFn(params) {
  return setTimeout(LOADING_TIME_IN_MSECS).then(() => {
    return {
      orgId: params.orgId,
      id: params.id,
    }
  })
}

async function batchLoadFn(paramsArray) {
  const loadTime = paramsArray.length === 1 ? LOADING_TIME_IN_MSECS : BULK_LOADING_TIME_IN_MSECS

  return setTimeout(loadTime).then(() => {
    return paramsArray.map((params) => {
      return {
        orgId: params.orgId,
        id: params.id,
      }
    })
  })
}

module.exports = {
  CONCURRENCY,
  ELEMENT_COUNT,
  MAX_ITEMS,
  TTL,
  ids: allIds,
  loadFn,
  batchLoadFn,
  validateAccuracy,
}
