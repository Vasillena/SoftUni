const companyAdministration = require('./companyAdministration.js');
const {assert} = require('chai');

describe('Tests companyAdministration', () => {
    describe('Tests hiringEmployee', () => {
        it('', () => {
            assert.throws(() => companyAdministration.hiringEmployee('A', 'B', 1), "We are not looking for workers for this position.");
            assert.equal(companyAdministration.hiringEmployee('A', 'Programmer', 3), "A was successfully hired for the position Programmer.")
            assert.equal(companyAdministration.hiringEmployee('A', 'Programmer', 5), "A was successfully hired for the position Programmer.")
            assert.equal(companyAdministration.hiringEmployee('A', 'Programmer', 1), "A is not approved for this position.")
        });
    });
    describe('Tests calculateSalary', () => {
        it('', () => {
            assert.throws(() => companyAdministration.calculateSalary(-1), "Invalid hours")
            assert.throws(() => companyAdministration.calculateSalary('1'), "Invalid hours")
            assert.throws(() => companyAdministration.calculateSalary(undefined), "Invalid hours")
            assert.equal(companyAdministration.calculateSalary(0), '0')
            assert.equal(companyAdministration.calculateSalary(1), '15')
            assert.equal(companyAdministration.calculateSalary(4), '60')
            assert.equal(companyAdministration.calculateSalary(160), '2400')
            assert.equal(companyAdministration.calculateSalary(161), '3415')
        });
    });
    describe('Tests firedEmployee', () => {
        it('', () => {
            assert.throws(() => companyAdministration.firedEmployee('A', 1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee('A','B', 1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(1, 1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(undefined, 1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee([], 1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee({a:'A', b:'B'}, 1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(['A'], 2), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(['A'], 'B'), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(['A'], 1.5), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(['A'], -1), "Invalid input")
            assert.throws(() => companyAdministration.firedEmployee(['A'], undefined), "Invalid input")
            assert.equal(companyAdministration.firedEmployee(['A', 'B', 'C'], 0), 'B, C')
            assert.equal(companyAdministration.firedEmployee(['A', 'B', 'C'], 1), 'A, C')
            assert.equal(companyAdministration.firedEmployee(['A'], 0), '')
        });
    });
});