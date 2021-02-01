// IMPORT MODULES under test here:
import { compareNumbers } from '../GuessUtils.js';
// import example from '../example.js';

const test = QUnit.test;

test('should compare player input and computer input to see if player guess is lower than computer', (expect) => {
    const player1 = 4;
    const computer1 = 11;
    
    //Arrange

    // Set up your arguments and expectations
    
    const expected = -1;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(player1, computer1);
    


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

const test2 = QUnit.test;

test2('should compare player input and computer input to see if player guess is higher than computer', (expect) => {
    const player = 7;
    const computer = 3;

    const expected = 1;

    const actual = compareNumbers(player, computer);

    expect.equal(actual, expected);
});

const test3 = QUnit.test;

test3('should compare player input and computer input to see if player guess is equal to computer', (expect) => {
    const player = 8;
    const computer = 8;

    const expected = 0;

    const actual = compareNumbers(player, computer);

    expect.equal(actual, expected);

});