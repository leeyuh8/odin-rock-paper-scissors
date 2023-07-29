let options = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;

const divParent = document.querySelector('div.parent');
const divResult = document.querySelector('div.result');
const divPlayerScore = document.querySelector('div.player-score');
const divComputerScore = document.querySelector('div.computer-score')
const h1Winner = document.querySelector('h1.winner');
const buttonReset = document.querySelector('button.reset');


function playRound() {
/*  - store what button option the player clicked
    - get computerSelection
    - compare player choice and computer choice
    - output result of round to div
*/
    playerSelection = this.getAttribute('value');
    console.log(playerSelection);
    
    computerSelection = options[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    
// Evaluate who gets a point in this round.
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'Rock':
                divResult.textContent = 'Tie! No points given.';
                break;
            case 'Paper':
                divResult.textContent = 'Computer gets a point!';
                break;
            case 'Scissors':
                divResult.textContent = 'You get a point!';
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                divResult.textContent = 'You get a point!';
                break;
            case 'Paper':
                divResult.textContent = 'Tie! No points given.';
                break;
            case 'Scissors':
                divResult.textContent = 'Computer gets a point!';
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                divResult.textContent = 'Computer gets a point!';
                break;
            case 'Paper':
                divResult.textContent = 'You get a point!';
                break;
            case 'Scissors':
                divResult.textContent = 'Tie! No points given.';
        }
    }

/*  read the result in div.result.
        - if it says 'Computer wins', increment the score in div.computer-score
        - if it says 'You win', increment the score in div.player-score
*/
    if (divResult.textContent === 'You get a point!') {
        ++divPlayerScore.textContent;
    } else if (divResult.textContent === 'Computer gets a point!') {
        ++divComputerScore.textContent;
    } 

/* check to see if player or computer score is 5
        -if player score is 5, h1Winner
        states 'You are the winner!'
        -if computer score is 5, h1Winner
        states states the 'Computer wins!'

        -must first check for a tie, if so, return 'Tie!'
*/
    if (divPlayerScore.textContent === '5' && divComputerScore.textContent === '5') {
        h1Winner.textContent = 'Tie';
    } else if (divPlayerScore.textContent === '5' ) {
        h1Winner.textContent = 'You win!';
    } else if (divComputerScore.textContent === '5') {
        h1Winner.textContent = 'Computer wins!';
    }

/* if h1 winner contains any text, then the game has completed.
        - stop player option buttons from being clicked
        - when reset button clicked, run resetGame function to reset scores.
*/
    if (h1Winner.textContent === 'Tie' 
        || h1Winner.textContent === 'You win!'
        || h1Winner.textContent === 'Computer wins!') {
            buttons.forEach(button => button.removeEventListener('click', playRound));
            buttonReset.addEventListener('click', resetScore);
        }
}

function resetScore(buttonReset) {
    buttons.forEach(button => button.addEventListener('click', playRound));
    
    divResult.textContent = '';
    divPlayerScore.textContent = '';
    divComputerScore.textContent = '';
    h1Winner.textContent = '';
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
