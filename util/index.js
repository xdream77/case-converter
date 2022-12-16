const pipe = (...fns) => start => 
    fns.reduce((arg, fn) => fn(arg) , start);

const pickOnlyUnique = arr => [...new Set(arr)];
const onlyUpperCase  = str => str.match(/[A-Z]/g);
const splitAt = char => str => str.split(char);
const toArray = val => Array.isArray(val) ? val : [val];
const toUpper = str => str.toUpperCase();
const toLower = str => str.toLowerCase();
const arrayToString = arr => arr.join('');
const firstLetterToUpper = ([head, ...body]) => `${toUpper(head)}${arrayToString(body)}`;
const firstLetterToLower = ([head, ...body]) => `${toLower(head)}${arrayToString(body)}`;
const mapItems = arr => arr.map(firstLetterToUpper);

const addSeperator = (str, sep) => arr => 
    arr.reduce((acc, cur) => 
        acc.replaceAll(cur, `${sep}${toLower(cur)}`), str);

const replaceUnderscore = pipe(
    splitAt('_'),
    mapItems,
    arrayToString
);

const replaceDash = pipe(
    splitAt('-'),
    mapItems,
    arrayToString
);

module.exports = {
    pipe,
    pickOnlyUnique,
    onlyUpperCase,
    splitAt,
    toArray,
    toUpper,
    toLower,
    arrayToString,
    firstLetterToUpper,
    firstLetterToLower,
    mapItems,
    addSeperator,
    replaceUnderscore,
    replaceDash
};