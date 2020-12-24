const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");
const { execute: forEachFn } = require("./contestants/forEach");
const { execute: forInFn } = require("./contestants/forIn");
const { execute: forLoopFn } = require("./contestants/forLoop");
const { execute: forLoopCachedFn } = require("./contestants/forLoopCached");
const { execute: forOfFn } = require("./contestants/forOf");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _foreach: getMeasureFn("foreach", forEachFn),
  _forin: getMeasureFn("forin", forInFn),
  _forloop: getMeasureFn("forloop", forLoopFn),
  _forloopcached: getMeasureFn("forloopcached", forLoopCachedFn),
  _forof: getMeasureFn("forof", forOfFn),
};

validateAccuracy(forEachFn());
validateAccuracy(forInFn());
validateAccuracy(forLoopFn());
validateAccuracy(forLoopCachedFn());
validateAccuracy(forOfFn());

const contestant = resolveContestant(contestants);
contestant();
