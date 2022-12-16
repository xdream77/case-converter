
const toCamel  = require('./lib/toCamel.js');
const toPascal = require('./lib/toPascal.js');
const toSnake  = require('./lib/toSnake.js');
const toKebab  = require('./lib/toKebab.js');

const pascal   = 'HelloWorldWhatsUp';
const kebab    = 'hello-world-whats-up';
const camel    = 'helloWorldWhatsUp';
const snake    = 'hello_world_whats_up';

console.log('\n------ Camel ------');
console.log(toCamel(pascal));
console.log(toCamel(kebab));
console.log(toCamel(camel));
console.log(toCamel(snake));

console.log('\n------ Pascal ------');
console.log(toPascal(pascal));
console.log(toPascal(kebab));
console.log(toPascal(camel));
console.log(toPascal(snake));

console.log('\n------ Snake ------');
console.log(toSnake(pascal));
console.log(toSnake(kebab));
console.log(toSnake(camel));
console.log(toSnake(snake));

console.log('\n------ Kebab ------');
console.log(toKebab(pascal));
console.log(toKebab(kebab));
console.log(toKebab(camel));
console.log(toKebab(snake));

console.log('\n------ Object keys ------');
const x = {
    MyMulti        : 'hello',
    'and-dashed'   : 'isWeird',
    with_underscore: 'isPossible',
    andAlsoCamels  : 'are supported'
};

const res = Object.entries(x)
    .map(([key, value]) => [ toKebab(key), value ]);

console.log(Object.fromEntries(res));
