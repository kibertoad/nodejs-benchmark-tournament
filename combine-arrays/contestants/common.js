const { validateEqual } = require("validation-utils");

function validateAccuracy(resultArray) {
  validateEqual(resultArray.toString(), [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,

    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ].toString());
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

const array2 = [7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  7, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

module.exports = {
  validateAccuracy,
  array1,
  array2
};
