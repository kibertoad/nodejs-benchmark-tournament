const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");
const { execute: indexofFn } = require("./contestants/indexof");
const { execute: includesFn } = require("./contestants/includes");
const { execute: regexFn } = require("./contestants/regex");
const { execute: regexCachedFn } = require("./contestants/regexCached");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _indexof: getMeasureFn("indexof", indexofFn),
  _includes: getMeasureFn("includes", includesFn),
  _regex: getMeasureFn("regex", regexFn),
  _regexcached: getMeasureFn("regexcached", regexCachedFn),
};

validateAccuracy(indexofFn());
validateAccuracy(includesFn());
validateAccuracy(regexFn());
validateAccuracy(regexCachedFn());

const contestant = resolveContestant(contestants);
contestant();
