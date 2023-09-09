const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");
const { execute: pushLoopFn } = require("./contestants/pushLoop");
const { execute: pushForEachFn } = require("./contestants/pushForEach");
const { execute: pushDestructFn } = require("./contestants/pushDestruct");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _pushloop: getMeasureFn("pushLoop", pushLoopFn),
  _pushforeach: getMeasureFn("pushForEach", pushForEachFn),
  _pushdestruct: getMeasureFn("pushDestruct", pushDestructFn),
};

validateAccuracy(pushLoopFn());
validateAccuracy(pushForEachFn());
validateAccuracy(pushDestructFn());

const contestant = resolveContestant(contestants);
contestant();
