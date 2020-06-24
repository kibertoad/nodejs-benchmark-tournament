const { resolveContestant } = require("../common/contestantResolver");
const { getMeasureFn } = require("../common/executionUtils");
const { execute: indexofFn } = require("./contestants/xml");
const { execute: includesFn } = require("./contestants/js2xmlparser");
const { execute: regexFn } = require("./contestants/xml2js");
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
