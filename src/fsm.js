// fsm.js

import { isCurrentStateValid, isInputValid } from "./util/validations.js";

function getNextState(input, currentState, transitions) {
    /**
     * Check for any invalid transition
     * 1. Transition is not available for current state
     * 2. Transition is availble for current state but the state does not have any output for given input
     */
    if (!transitions[currentState] || transitions[currentState][input] === undefined) {
        throw new Error(`Error: No valid transition from state ${currentState} for input ${input}`);
    }

    return transitions[currentState][input];
}

/**
 * The `fsm.js` module provides a recursive implementation of a Finite State Machine (FSM).
 * It allows for processing a sequence of inputs based on defined state transitions and returns
 * the final state of transition. Also, this function handle all conditional checks and bottle necks as well.
 * @param {string} currentState 
 * @param {Array<number>} inputArray 
 * @param {Object} transitions
 * @param {Array<string>} all valid states
 * @returns {string} finalState or Error message
 */

export default function fsm(currentState, inputArray, transitions, states) {
    // check if input array is empty
    if (inputArray.length === 0) {
        return currentState;
    }

    const input = inputArray[0];
    if (!isInputValid(input) || !isCurrentStateValid(currentState, states)) {
        return;
    }

    let remainingInputs;
    if (inputArray.length > 0) {
        remainingInputs = inputArray.slice(1);
    }

    const nextState = getNextState(input, currentState, transitions);

    return fsm(nextState, remainingInputs, transitions, states);
}