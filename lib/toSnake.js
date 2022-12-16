const toCamel = require('./toCamel.js');
const { pipe, onlyUpperCase, pickOnlyUnique, addSeperator } = require('../util/index.js');

module.exports = str => pipe(
    toCamel,
    onlyUpperCase,
    pickOnlyUnique,
    addSeperator(toCamel(str), '_'),
)(str);