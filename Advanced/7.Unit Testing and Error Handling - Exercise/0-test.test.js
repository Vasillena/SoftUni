const sumOfTwoNumbers = require('./0-test.js');
const { assert } = require('chai');

describe('sumOfTwoNumbers function test', () => {

    it('test with two numbers', () => {
        assert.equal(sumOfTwoNumbers(3, 4), 7)
    });
    it('test with string number', () => {
        assert.equal(sumOfTwoNumbers('3', 4), 7)
    });
});