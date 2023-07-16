let options = ['Rock', 'Paper', 'Scissors'];
let computerSelection = options[Math.floor(Math.random() * 3)];
let playerSelection = prompt('Make your choice:', 'Rock, Paper, or Scissors');


function getComputerChoice() { 
    let computerDialogue = 'Computer: ' + computerSelection;
    return computerDialogue;
}
console.log(getComputerChoice());


let playerDialogue = 'You: ' + playerSelection;
console.log(playerDialogue);


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'Rock':
                return 'Tie!';
                break;
            case 'Paper':
                return 'Computer wins!';
                break;
            case 'Scissors':
                return 'You win!';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                return 'You win!';
                break;
            case 'Paper':
                return 'Tie!';
                break;
            case 'Scissors':
                return 'Computer wins!';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                return 'Computer wins!';
                break;
            case 'Paper':
                return 'You win!';
                break;
            case 'Scissors':
                return 'Tie!';
        }
    } else {
        return 'Invalid choice. Please re-enter.';
    }
}
console.log(playRound(playerSelection, computerSelection)); 


let scorePlayer = 0;
let scoreComputer = 0;
function game(playRound) {
    // run game five times
    // in each iteration: 
    //   - get computerSelection
    //   - get player Selection
    //   - get result of running playRound
    //   - store result as a tally to scorePlayer or score Computer
    for (var i = 0; i < 4; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result === 'You win!') {
            return ++scorePlayer;
        } else if (result === 'Computer wins!') {
            return ++scoreComputer;
        } else if (result === 'Tie!') {
            return ++scorePlayer && ++scoreComputer;
        }
    }


    //  compare player score to computer score:
    //   - playerScore > computerScore, then player wins!
    //   - computerScore > playerScore, then computer wins!
    //   - playerScore = computerScore, then tie!
}
console.log(game(playRound));
