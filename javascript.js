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

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock.');
    } else {
        console.log('still testing');
    }
}
oneRound(playerSelection, computerSelection); 



