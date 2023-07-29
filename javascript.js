let options = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;

const divParent = document.querySelector('div.parent');
const divResult = document.querySelector('div.result');
const spanPlayerScore = document.querySelector('span.player-score');
const spanComputerScore = document.querySelector('span.computer-score')




function playRound(playerSelection, computerSelection) {
    /*  - store what button option the player clicked
        - get computerSelection
        - compare player choice and computer choice
        - output result of round to div
    */
    playerSelection = this.getAttribute('value');
    console.log(playerSelection);
    
    computerSelection = options[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'Rock':
                divResult.textContent = 'Tie!';
                break;
            case 'Paper':
                divResult.textContent = 'Computer wins!';
                break;
            case 'Scissors':
                divResult.textContent = 'You win!';
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                divResult.textContent = 'You win!';
                break;
            case 'Paper':
                divResult.textContent = 'Tie!';
                break;
            case 'Scissors':
                divResult.textContent = 'Computer wins!';
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                divResult.textContent = 'Computer wins!';
                break;
            case 'Paper':
                divResult.textContent = 'You win!';
                break;
            case 'Scissors':
                divResult.textContent = 'Tie!';
        }
    }

/*  read the result in div.result.
        - if it says 'Computer wins', increment the score in span.computer-score
        - if it says 'You win', increment the score in span.player-score
*/
    if (divResult.textContent === 'You win!') {
        ++spanPlayerScore.textContent;
    } else if (divResult.textContent === 'Computer wins!') {
        ++spanComputerScore.textContent;
    } 

/* check to see if player or computer score is 5
        -if player score is 5, run displayWinner() so that divWinner
        states 'You are the winner!'
        -if computer score is 5, run displayWinner() so that divWinner
        states states the 'Computer wins!'

        -must first check for a tie, if so, return 'Tie!'
*/
    if (spanPlayerScore.textContent === '5' && spanComputerScore.textContent === '5') {
        console.log('works');
    } else if (spanPlayerScore.textContent === '5' ) {
        console.log('works');
    } else if (spanComputerScore.textContent === '5') {
        console.log('works');
    }


}


// function to remove span.player-score, span.computer-score
// and div.result, add replaces it with h1.winner 
function displayWinner() {
    divParent.textContent = '';
    const h1Winner = document.createElement('h1');
    divParent.appendChild(h1Winner);
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

displayWinner();



/*
let scorePlayer = 0;
let scoreComputer = 0;
let result;
function game() {
    // run game five times
    // in each iteration: 
    //   - get computerSelection
    //   - get player Selection
    //   - get result of running playRound
    //   - store result as a tally to scorePlayer or score Computer
    for (var i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        
        result = playRound(playerSelection, computerSelection);
        if (result === 'You win!') {
            ++scorePlayer;
        } else if (result === 'Computer wins!') {
            ++scoreComputer;
        } else if (result === 'Tie!') {
            ++scoreComputer && ++scorePlayer;
        };
    };
    console.log(scorePlayer);
    console.log(scoreComputer);

    // compare player score to computer score:
    //   - playerScore > computerScore, then player wins!
    //   - computerScore > playerScore, then computer wins!
    //   - playerScore = computerScore, then tie!
    if (scorePlayer > scoreComputer) {
        console.log('You won :)');
    } else if (scorePlayer < scoreComputer) {
        console.log('You lost :(');
    } else if (scorePlayer === scoreComputer) {
        console.log('Tie!');
    }
}
game();
*/