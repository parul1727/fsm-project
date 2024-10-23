// validations.test.js

import { expect } from "chai";
import { isValid, isInputValid, isCurrentStateValid } from "../validations.js";

describe('isValid', () => {
    it('should return false for 0 if isZeroValid is undefined or false', () => {
        expect(isValid(0)).to.be.false;
    });

    it('should return true for 0 if isZeroValid is true', () => {
        expect(isValid(0, true)).to.be.true;
    });

    it('should return true for non-zero numbers', () => {
        expect(isValid(5)).to.be.true;
        expect(isValid(-3)).to.be.true;
    });

    it('should return false for null/ undefined/ empty string/ string other than number', () => {
        expect(isValid(null)).to.be.false;
        expect(isValid(undefined)).to.be.false;
        expect(isValid('')).to.be.false;
        expect(isValid('a')).to.be.false;
    });
});


describe('isInputValid', () => {
    it('should return true for 0 or 1', () => {
        expect(isInputValid(0)).to.be.true;
        expect(isInputValid(1)).to.be.true;
    });

    it('should throw error for value other than 0 or 1', () => {
        expect(() => isInputValid(2)).to.throw(Error, 'Error: input 2 is not valid');
        expect(() => isInputValid(null)).to.throw(Error, 'Error: input null is not valid');
        expect(() => isInputValid(undefined)).to.throw(Error, 'Error: input undefined is not valid');
        expect(() => isInputValid('')).to.throw(Error, 'Error: input  is not valid');
        expect(() => isInputValid('a')).to.throw(Error, 'Error: input a is not valid');
    });
});

describe('isCurrentStateValid', () => {
    it('should return true for a valid current state', () => {
        const states = ['S0', 'S1', 'S2'];
        expect(isCurrentStateValid('S0', states)).to.be.true;
        expect(isCurrentStateValid('S1', states)).to.be.true;
        expect(isCurrentStateValid('S2', states)).to.be.true;
    });

    it('should throw error for an invalid current state', () => {
        const states = ['S0', 'S1', 'S2'];
        expect(() => isCurrentStateValid('S3', states)).to.throw(Error, 'Error: S3 is not part of states S0,S1,S2');
        expect(() => isCurrentStateValid('', states)).to.throw(Error, 'Error:  is not part of states S0,S1,S2');
        expect(() => isCurrentStateValid(null, states)).to.throw(Error, 'Error: null is not part of states S0,S1,S2');
        expect(() => isCurrentStateValid(undefined, states)).to.throw(Error, 'Error: undefined is not part of states S0,S1,S2');
    });
});