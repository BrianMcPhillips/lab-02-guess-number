// import functions and grab DOM elements
import { compareNumbers, convertStrings, randomThrow } from './GuessUtils.js';
const userNumber = document.querySelector('#number-input');
const userSubmit = document.querySelector('#submit-button');
const triesRemaining = document.querySelector('#guesses-remaining');
const highOrLow = document.querySelector('#guess-was');
const resultDisplay = document.querySelector('#result-display');
const resetButton = document.querySelector('#reset');


// initialize state
let attemptsLeft = 4;
let randomNumber = randomThrow();
console.log(randomNumber);
// set event listeners to update state and DOM

userSubmit.addEventListener('click', () => {
    attemptsLeft--;
    triesRemaining.textContent = `You have ${attemptsLeft} attempts left`;
    const playerGuess = Number(userNumber.value);

    const result = compareNumbers(playerGuess, randomNumber);

    const finalResult = convertStrings(result);
    highOrLow.textContent = finalResult;

    
    if (result === 0) {
        resultDisplay.textContent = 'You win!';
        userNumber.disabled = true;
        userSubmit.disabled = true;
    }

    if (attemptsLeft === 0 && result !== 0) {
        resultDisplay.textContent = 'You lose';
        userNumber.disabled = true;
        userSubmit.disabled = true;
    } 
});

resetButton.addEventListener('click', () =>{
    userSubmit.disabled = false;
    userNumber.disabled = false;
    attemptsLeft = 4;
    triesRemaining.textContent = 'Guesses Remaining';
    userNumber.value = '';
    resultDisplay.textContent = 'Result';
    highOrLow.textContent = '';
    randomNumber = randomThrow();
    console.log(randomNumber);

    
});
