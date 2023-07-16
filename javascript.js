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
                console.log('Tie!');
                break;
            case 'Paper':
                console.log('Computer wins! Paper beats Rock.');
                break;
            case 'Scissors':
                console.log('You win! Rock beats Scissors.');
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                console.log('You win! Paper beats Rock.');
                break;
            case 'Paper':
                console.log('Tie!');
                break;
            case 'Scissors':
                console.log('Computer wins! Scissors beats Paper.');
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                console.log('Computer wins! Rock beats Scissors.');
                break;
            case 'Paper':
                console.log('You win! Scissors beats Paper.');
                break;
            case 'Scissors':
                console.log('Tie!');
        }
    } else {
        console.log('Invalid choice. Please re-enter.')
    }
}
playRound(playerSelection, computerSelection); 



