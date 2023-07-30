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

const optionsDiv = document.querySelector('.options');
const announceFinalWinner = document.createElement('h1');
const playAgainButton = document.createElement('button');
    playAgainButton.textContent = "Play Again";


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

function finalWinner () {
    if (playerScore.textContent === '5' && computerScore.textContent === '5') {
        announceFinalWinner.textContent = 'Tie';
    } else if (playerScore.textContent === '5' ) {
        announceFinalWinner.innerHTML = 'You win! <img src="./images/happy.png">';
    } else if (computerScore.textContent === '5') {
        announceFinalWinner.innerHTML = 'Computer wins! <img src="./images/sad.png">';
    } else {
        return;
    }

    roundResult.textContent = "";
    optionsDiv.textContent = "";
    optionsDiv.appendChild(announceFinalWinner);
    optionsDiv.appendChild(playAgainButton);
 return;
   
   
    
    /* check to see if player or computer score is 5
        - remove text content of .options
        - create new div with .game-end-winner that contains:
            - h1 tag to announce the overall winner
            - 'play again' button
        - append new div to .options

*/
   

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

function playRound() {
    getPlayerSelection(this);
    getComputerSelection();

    displayWinnerOfRound();
    
    finalWinner();
}

function resetScore(buttonReset) {
    buttons.forEach(button => button.addEventListener('click', playRound));
    
    roundResult.textContent = '';
    playerScore.textContent = '';
    computerScore.textContent = '';
    h1Winner.textContent = '';
}

const buttons = document.querySelectorAll('.options > button');
buttons.forEach(button => button.addEventListener('click', playRound));
