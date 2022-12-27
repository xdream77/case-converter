const { toCamel, toPascal, toSnake, toKebab, objectKeys } = require('../index.js');

const pascal   = 'HelloWorldWhatsUp';
const kebab    = 'hello-world-whats-up';
const camel    = 'helloWorldWhatsUp';
const snake    = 'hello_world_whats_up';
const mixed    = 'Hello_worldWhats_up';

describe('index', () => {
    
    it('should convert string to camelCase', () => {
        expect.assertions(5);
        expect(toCamel(pascal)).toBe('helloWorldWhatsUp');
        expect(toCamel(kebab)).toBe('helloWorldWhatsUp');
        expect(toCamel(camel)).toBe('helloWorldWhatsUp');
        expect(toCamel(snake)).toBe('helloWorldWhatsUp');
        expect(toCamel(mixed)).toBe('helloWorldWhatsUp');
    });
    
    it('should convert string to PascalCase', () => {
        expect.assertions(5);
        expect(toPascal(pascal)).toBe('HelloWorldWhatsUp');
        expect(toPascal(kebab)).toBe('HelloWorldWhatsUp');
        expect(toPascal(camel)).toBe('HelloWorldWhatsUp');
        expect(toPascal(snake)).toBe('HelloWorldWhatsUp');
        expect(toPascal(mixed)).toBe('HelloWorldWhatsUp');
    });
    
    it('should convert string to snake_case', () => {
        expect.assertions(5);
        expect(toSnake(pascal)).toBe('hello_world_whats_up');
        expect(toSnake(kebab)).toBe('hello_world_whats_up');
        expect(toSnake(camel)).toBe('hello_world_whats_up');
        expect(toSnake(snake)).toBe('hello_world_whats_up');
        expect(toSnake(mixed)).toBe('hello_world_whats_up');
    });
    
    it('should convert string to kebab-case', () => {
        expect.assertions(5);
        expect(toKebab(pascal)).toBe('hello-world-whats-up');
        expect(toKebab(kebab)).toBe('hello-world-whats-up');
        expect(toKebab(camel)).toBe('hello-world-whats-up');
        expect(toKebab(snake)).toBe('hello-world-whats-up');
        expect(toKebab(mixed)).toBe('hello-world-whats-up');
    });
    
    it('should convert ObjectKeys to given format', () => {
        expect.assertions(1);

        const obj = {
            MyMulti        : 'hello',
            'and-dashed'   : 'isWeird',
            with_underscore: 'isPossible',
            andAlsoCamels  : 'are supported'
        };

        expect(objectKeys(obj, toKebab)).toStrictEqual({
            'and-also-camels': 'are supported',
            'and-dashed'     : 'isWeird',
            'my-multi'       : 'hello',
            'with-underscore': 'isPossible',
        });
    
    });
});