// validations.js

const VALID_INPUT = [0, 1];

/**
 * Check if value is valid
 * @param {number} value 
 * @param {boolean} zeroIsValid, if true the function counts zero as valid
 * @returns {boolean} true: if value is valid, false: if value is invalid
 */
export function isValid(value, zeroIsValid) {
    return (zeroIsValid && value === 0) || !!Number(value);
}

/**
 * Validation to check if Input number is valid
 * @param {number} input 
 * @returns {boolean} true: if validation successful else throw error
 */
export function isInputValid(input) {
    if (!isValid(input, true) || !VALID_INPUT.includes(input)) {
        throw new Error(`Error: input ${input} is not valid`);
    }
    return true;
}

/**
 * Validation to check if current state is exists and valid
 * @param {string} currentState 
 * @param {Array<string>} all valid states
 * @returns {boolean} true: if validation successful else throw error
 */
export function isCurrentStateValid(currentState, states) {
    if (!currentState || !states.includes(currentState)) {
        throw new Error(`Error: ${currentState} is not part of states ${states.join(',')}`);
    }
    return true;
}