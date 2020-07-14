const {validationHelper: validate} = require("validation-utils");
const fs = require('fs')

const expectedXml = fs.readFileSync(__dirname + '/expected.xml').toString()
const expectedXmlWithVersion = fs.readFileSync(__dirname + '/expected_with_version.xml').toString()
const expectedXmlNotSelfEnclosed = fs.readFileSync(__dirname + '/expected_not_self_enclosed.xml').toString()

function getExpected(isSelfEnclosed, hasXmlVersion) {
    if (!isSelfEnclosed && !hasXmlVersion) {
        return expectedXmlNotSelfEnclosed
    }
    if (isSelfEnclosed && !hasXmlVersion) {
        return expectedXml
    }
    if (isSelfEnclosed && hasXmlVersion) {
        return expectedXmlWithVersion
    }
    throw new Error('Unexpected parameters')
}

function validateAccuracy(generatedXml, isSelfEnclosed, hasXmlVersion) {
    const expectedXml = getExpected(isSelfEnclosed, hasXmlVersion)
    validate.booleanTrue(expectedXml === generatedXml, `Wrong XML generated: ${generatedXml}`)
}

module.exports = {
    validateAccuracy,
};
