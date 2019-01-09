//const {assert} = require ('chai');
const assert = require('chai').assert;

var person, fields, values;
before(() => {
    person = {name: 'Tochukwu', position: 'Senior Developer', salary: 'R57,000'};
});

describe('#ChaiAssertion', () => {
    beforeEach(() => {
        fields = Object.keys(person);
        values = Object.values(person);
    });

    it('Should be an array', () => {
        assert(Array.isArray(fields));
    });

    it('Should be 3 elements', () => {
        assert.equal(values.length, 3, 'It is equal to 3');
    });

    it('Should be an object', () => {
        assert.ok(typeof new Set(values) == 'object', 'It is an object');
    });
});