[![Node.js CI](https://github.com/xdream77/case-converter/actions/workflows/node.js.yml/badge.svg)](https://github.com/xdream77/case-converter/actions/workflows/node.js.yml) 
![Test](https://img.shields.io/badge/Coverage-100%25-green.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-lightgrey)
# case-converter

- Converts cases from one to another. 
- Perfect to clean and unify your code. 
- Zero Dependency

Run `example.js` for live action.

## Installation
```Javascript
npm i @xdream77/case-converter
```

### Provided functions

- toCamel
- toKebab
- toPascal
- toSnake

### Usage
```Javascript
const { toSnake, toCamel } = require('@xdream77/case-converter');

const str = 'This_is-myCamel';

console.log(toSnake(str)); // this_is_my_camel
console.log(toCamel(str)); // thisIsMyCamel

```

### Bonus: Object keys
```Javascript
const { objectKeys, toCamel } = require('@xdream77/case-converter');

const obj = {
    MyMulti          : 'hello',
    'This_is-myCamel': 'isWeird',
    with_underscore  : 'isPossible',
    andAlsoCamels    : 'are supported'
};

console.log(objectKeys(obj, toCamel));
/**
{
  myMulti: 'hello',
  thisIsMyCamel: 'isWeird',
  withUnderscore: 'isPossible',
  andAlsoCamels: 'are supported'
}
 */
```
