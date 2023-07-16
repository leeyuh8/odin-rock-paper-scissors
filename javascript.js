let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() { 
    let computerSelection = options[Math.floor(Math.random() * 3)];
    let computerDialogue = 'Computer: ' + computerSelection;
    return computerDialogue;
}
console.log(getComputerChoice());

let playerSelection = prompt('Make your choice:', 'Rock, Paper, or Scissors');
let playerDialogue = 'You: ' + playerSelection;
console.log(playerDialogue);

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock.');
    } else {
        console.log('still testing');
    }
}



