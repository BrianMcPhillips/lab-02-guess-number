// import functions and grab DOM elements
//import { isGuessCorrect, isGuessLow } from "./cookieUtils";
const userNumber = document.querySelector("#number-input");
const userSubmit = document.querySelector("#submit-button");
const triesRemaining = document.querySelector("#guesses-remaining");
const highOrLow= document.querySelector("#guess-was");
const resultDisplay = document.querySelector("#result-display");

// initialize state
let guessesRemaining = 4;
const computerNumber = Math.ceil(Math.random() * 20);
// set event listeners to update state and DOM
userSubmit.addEventListener('click', () => {
    if (triesRemaining > 0) {
    const userGuess = Number()
    }
});