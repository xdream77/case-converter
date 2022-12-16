const { pipe, firstLetterToUpper, replaceUnderscore, replaceDash } = require('../util/index.js');

module.exports = pipe(
    replaceUnderscore,
    replaceDash,
    firstLetterToUpper
);