let options = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;

const playerIcon = document.querySelector('.player-icon');
const playerIconImg = document.querySelector('.player-icon > img');

const computerIcon = document.querySelector('.computer-icon');
const computerIconImg = document.querySelector('.computer-icon > img');

const roundResult = document.querySelector('.round-result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

function getPlayerSelection (button) {
    playerSelection = button.getAttribute('value');
    console.log(playerSelection);

    playerIcon.textContent = "";

    const playerIconChoice = document.createElement('img');
    playerIconChoice.setAttribute('src', `./images/${playerSelection}.png`)
    playerIcon.appendChild(playerIconChoice);
}

function getComputerSelection () {
    computerSelection = options[Math.floor(Math.random() * 3)];
    console.log(computerSelection);

    computerIcon.textContent = "";

    const computerIconChoice = document.createElement('img');
    computerIconChoice.setAttribute('src', `./images/${computerSelection}.png`)
    computerIcon.appendChild(computerIconChoice);
}

function displayWinnerOfRound () {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                roundResult.textContent = 'Tie! No points given.';
                break;
            case 'paper':
                roundResult.textContent = 'Computer gets a point!';
                break;
            case 'scissors':
                roundResult.textContent = 'You get a point!';
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                roundResult.textContent = 'You get a point!';
                break;
            case 'paper':
                roundResult.textContent = 'Tie! No points given.';
                break;
            case 'scissors':
                roundResult.textContent = 'Computer gets a point!';
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                roundResult.textContent = 'Computer gets a point!';
                break;
            case 'paper':
                roundResult.textContent = 'You get a point!';
                break;
            case 'scissors':
                roundResult.textContent = 'Tie! No points given.';
        }
    }

    if (roundResult.textContent === 'You get a point!') {
        ++playerScore.textContent;
    } else if (roundResult.textContent === 'Computer gets a point!') {
        ++computerScore.textContent;
    } 
}

function playRound() {
    getPlayerSelection(this);
    getComputerSelection();

    displayWinnerOfRound();
    return;
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
    
    roundResult.textContent = '';
    divPlayerScore.textContent = '';
    divComputerScore.textContent = '';
    h1Winner.textContent = '';
}

const buttons = document.querySelectorAll('.options > button');
buttons.forEach(button => button.addEventListener('click', playRound));
