const { pipe, firstLetterToLower, replaceUnderscore, replaceDash } = require('../util/index.js');

module.exports = pipe(
    replaceUnderscore,
    replaceDash,
    firstLetterToLower
);