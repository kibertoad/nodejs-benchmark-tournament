const { getCommonBuilder } = require('src/commonBuilder')
const { resolveContestant } = require('src/contestantResolver')
const { getMeasureFn } = require('src/executionUtils')
const { outputResults } = require('src/resultUtils')

module.exports = {
    getBuilder: getCommonBuilder,
    resolveContestant,
    getMeasureFn,
    outputResults
}
