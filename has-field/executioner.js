const { resolveContestant } = require("../common/src/contestantResolver");
const { getMeasureFn } = require("../common/src/executionUtils");
const { execute: hasOwnPropertyFn } = require("./contestants/HasOwnProperty");
const { execute: inFn } = require("./contestants/in");
const { execute: objectHasOwnPropertyFn } = require("./contestants/ObjectHasOwnProperty");
const { execute: directFieldAccessFn } = require("./contestants/directFieldAccess");
const { execute: mapHasFn } = require("./contestants/MapHas");
const { execute: mapGetFn } = require("./contestants/MapGet");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _directFieldAccess: getMeasureFn("directFieldAccess", directFieldAccessFn),
  _hasOwnProperty: getMeasureFn("hasOwnProperty", hasOwnPropertyFn),
  _objectHasOwnProperty: getMeasureFn("objectHasOwnProperty", objectHasOwnPropertyFn),
  _in: getMeasureFn("in", inFn),
  _mapHas: getMeasureFn("mapHas", mapHasFn),
  _mapGet: getMeasureFn("mapGet", mapGetFn),
};

validateAccuracy(directFieldAccessFn());
validateAccuracy(hasOwnPropertyFn());
validateAccuracy(objectHasOwnPropertyFn());
validateAccuracy(inFn());
validateAccuracy(mapHasFn());
validateAccuracy(mapGetFn());

const contestant = resolveContestant(contestants);
contestant();
