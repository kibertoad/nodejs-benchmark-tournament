const { resolveContestant } = require("../common/contestantResolver");
const { getMeasureFn } = require("../common/executionUtils");
const { execute: indexofFn } = require("./contestants/indexof");
const { execute: includesFn } = require("./contestants/includes");
const { execute: regexFn } = require("./contestants/regex");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _indexof: getMeasureFn("indexof", indexofFn),
  _includes: getMeasureFn("includes", includesFn),
  _regex: getMeasureFn("regex", regexFn),
};

validateAccuracy(indexofFn());
validateAccuracy(includesFn());
validateAccuracy(regexFn());

const contestant = resolveContestant(contestants);
contestant();
