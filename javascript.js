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
                return 'Computer wins! Paper beats Rock.';
                break;
            case 'Scissors':
                return 'You win! Rock beats Scissors.';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                return 'You win! Paper beats Rock.';
                break;
            case 'Paper':
                return 'Tie!';
                break;
            case 'Scissors':
                return 'Computer wins! Scissors beats Paper.';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                return 'Computer wins! Rock beats Scissors.';
                break;
            case 'Paper':
                return 'You win! Scissors beats Paper.';
                break;
            case 'Scissors':
                return 'Tie!';
        }
    } else {
        return 'Invalid choice. Please re-enter.';
    }
}
console.log(playRound(playerSelection, computerSelection)); 



