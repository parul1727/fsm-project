// fsm.test.js

import { expect } from 'chai';
import fsm from '../fsm.js';

describe('fsm test for valid transition', () => {
    const transitions = {
        'S0': { 0: 'S0', 1: 'S1' },
        'S1': { 0: 'S2', 1: 'S0' },
        'S2': { 0: 'S1', 1: 'S2' },
    };
    const states = ['S0', 'S1', 'S2'];

    it('should return the current state if input array is empty', () => {
        expect(fsm('S0', [], transitions, states)).to.equal('S0');
    });

    it('should process a valid sequence of inputs and return the final state', () => {
        expect(fsm('S0', [0, 1, 0], transitions, states)).to.equal('S2');
        expect(fsm('S0', [0], transitions, states)).to.equal('S0');
    });

    it('should throw error for invalid input or currentState', () => {
        expect(() => fsm('S0', [2], transitions, states))
                    .to.throw(Error, 'Error: input 2 is not valid');
        expect(() => fsm('S0', [0, 1, 2, 0], transitions, states))
                    .to.throw(Error, 'Error: input 2 is not valid');
        expect(() => fsm('', [0, 1, 1], transitions, states))
                    .to.throw(Error, 'Error:  is not part of states S0,S1,S2');
        expect(() => fsm('S3', [0, 1], transitions, states))
            .to.throw(Error, 'Error: S3 is not part of states S0,S1,S2');
    });

    it('should handle a single valid input and return the next state', () => {
        expect(fsm('S0', [0], transitions, states)).to.equal('S0');
        expect(fsm('S1', [1, 0, 0, 0, 1], transitions, states)).to.equal('S1');
    });
});

describe('fsm test for invalid transition with valid input and current state', () => {
    const transitions = {
        'S0': { 0: 'S0', 1: 'S1' },
        'S1': { 0: 'S3', 1: 'S0' },
        'S2': { 0: 'S1', 1: 'S2' },
    };
    const states = ['S0', 'S1', 'S2'];

    it('should throw error for invalid transition state', () => {
        expect(() => fsm('S0', [0, 1, 0, 0], transitions, states))
                    .to.throw(Error, 'Error: S3 is not part of states S0,S1,S2');
    });
});