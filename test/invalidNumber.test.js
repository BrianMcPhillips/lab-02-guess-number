// IMPORT MODULES under test here:
import { playerGuess } from '../app.js';
// import example from '../example.js';

const test = QUnit.test;

test('should return true if passed a number between 1 and 20', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = playerGuess;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
