## Installation

Clone the repository
   git clone https://github.com/yourusername/FSM-JS-Project.git

Install Dependencies
   npm install

Run application
    npm start

Test application
    npm test

## What more I could do:

Instead of static input data there are 2 more options:
1) Read the input from command line
2) Provide a json file which contains array of all test case and read test data one by one
3) Loop Detections
4) Finite length of array but extra large length
5) Use cache to store result of next State and before calculating the next state check the result from cache.

## Bottleneck:

1) The input array is of finit length as oer description but whatif the finit lenght is a big number for example 100,000 or more
Suggested Solution: Option to provide a max length for array if not provided then some default length should assigned

2)  [0, 0, 0, 0, ...., 0] will result in a loop at S0 if Input array length is very long
    [0, 1, 0, 1, 1, 1, 1, ...., 1] will result in a a loop at the final State S2 if Input array length is very long
Suggested Solution: Keep track of how many times the state is visited and if is visited more than some suggested count then return the State. For ex: if (visited Count > MAX_VISISTED_COUNT) {return finalState};
Also, if the state is visited more than max count then use new Set(InputArray) and based on that final state can be returned