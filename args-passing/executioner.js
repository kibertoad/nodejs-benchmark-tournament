const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");
const { execute: argApplyFn } = require("./contestants/argumentApply");
const { execute: argSpreadFn } = require("./contestants/argumentSpread");
const { execute: copyApplyFn } = require("./contestants/copyApply");
const { execute: copySpreadFn } = require("./contestants/copySpread");
const { execute: spreadSpreadFn } = require("./contestants/spreadSpread");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _argApply: getMeasureFn("argApply", argApplyFn),
  _argSpread: getMeasureFn("argSpread", argSpreadFn),
  _copyApply: getMeasureFn("copyApply", copyApplyFn),
  _copySpread: getMeasureFn("copySpread", copySpreadFn),
  _spreadSpread: getMeasureFn("spreadSpread", spreadSpreadFn),
};

validateAccuracy(argApplyFn());
validateAccuracy(argSpreadFn());
validateAccuracy(copyApplyFn());
validateAccuracy(copySpreadFn());
validateAccuracy(spreadSpreadFn());

const contestant = resolveContestant(contestants);
contestant();
