const { resolveContestant } = require("../common/contestantResolver");
const { getMeasureFn } = require("../common/executionUtils");
const { execute: xmlFn } = require("./contestants/xml");
const { execute: xml2jsFn } = require("./contestants/xml2js");
const { execute: xmljsFn } = require("./contestants/xml-js");
const { execute: xmlLtxFn } = require("./contestants/xml-ltx");
const { execute: js2xmlparserFn } = require("./contestants/js2xmlparser");
const { validateAccuracy } = require("./contestants/common");

const contestants = {
  _ltx: getMeasureFn("ltx", xmlLtxFn),
  _xml: getMeasureFn("xml", xmlFn),
  _xml2js: getMeasureFn("xml2js", xml2jsFn),
  _xmljs: getMeasureFn("xmljs", xmljsFn),
  _js2xmlparser: getMeasureFn("js2xmlparser", js2xmlparserFn),
};

validateAccuracy(xmlFn(), false);
validateAccuracy(xmlLtxFn(), true);
//validateAccuracy(xml2jsFn());
//validateAccuracy(xmljsFn());
//validateAccuracy(js2xmlparserFn());

const contestant = resolveContestant(contestants);
contestant();
