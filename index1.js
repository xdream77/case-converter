const { objectKeys, toCamel } = require('./index.js');

const obj = {
    MyMulti          : 'hello',
    'This_is-myCamel': 'isWeird',
    with_underscore  : 'isPossible',
    andAlsoCamels    : 'are supported'
};

console.log(objectKeys(obj, toCamel));