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

### Want to use it on Object keys?
```Javascript
const { toKebab } = require('@xdream77/case-converter');
const obj = {
    MyMulti        : 'hello',
    'and-dashed'   : 'isWeird',
    with_underscore: 'isPossible',
    andAlsoCamels  : 'are supported'
};

const res = Object.entries(obj)
    .map(([key, value]) => [ toKebab(key), value ]);

console.log(Object.fromEntries(res));
/**
{
  'my-multi': 'hello',
  'and-dashed': 'isWeird',
  'with-underscore': 'isPossible',
  'and-also-camels': 'are supported'
}
 */
```
