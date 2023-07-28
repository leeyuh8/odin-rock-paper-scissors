let options = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;
let computerDialogue;
const div = document.querySelector('div');


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
                div.textContent = 'Tie!';
                break;
            case 'Paper':
                div.textContent = 'Computer wins!';
                break;
            case 'Scissors':
                div.textContent = 'You win!';
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                div.textContent = 'You win!';
                break;
            case 'Paper':
                div.textContent = 'Tie!';
                break;
            case 'Scissors':
                div.textContent = 'Computer wins!';
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                div.textContent = 'Computer wins!';
                break;
            case 'Paper':
                div.textContent = 'You win!';
                break;
            case 'Scissors':
                div.textContent = 'Tie!';
        }
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));



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