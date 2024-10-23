// index.js

import fsm from './src/fsm.js';

const states = ['S0', 'S1', 'S2'];
const initialState = 'S0';
const inputSequence = [1, 0, 1, 0];
const finalStates = ['S0', 'S1', 'S2'];
const transitions = {
    'S0': { 0: 'S0', 1: 'S1' },
    'S1': { 0: 'S2', 1: 'S0' },
    'S2': { 0: 'S1', 1: 'S2' },
};

try {
    const finalState = fsm(initialState, inputSequence, transitions, states);
    if (!finalStates.includes(finalState)) { // check if final state inside is valid
        throw new Error(`ERROR: finalState ${finalState} is not part of final states ${states.join(',')}`);
    }
    console.log(`Final state: ${finalState}`);
} catch(err) {
    console.error(`FSM Error: ${err.message}`);
}
