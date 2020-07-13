const {validationHelper: validate} = require("validation-utils");
const fs = require('fs')

const expectedXml = fs.readFileSync(__dirname + '/expected.xml').toString()
const expectedXmlNotSelfEnclosed = fs.readFileSync(__dirname + '/expected_not_self_enclosed.xml').toString()

function validateAccuracy(generatedXml, isSelfEnclosed) {
    validate.booleanTrue(
        isSelfEnclosed ?
            expectedXml === generatedXml : expectedXmlNotSelfEnclosed === generatedXml, `Wrong XML generated: ${generatedXml}`)
}

module.exports = {
    validateAccuracy,
};
