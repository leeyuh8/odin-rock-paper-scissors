let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() { 
    let computerSelection = options[Math.floor(Math.random() * 3)];
    return computerSelection;
}

let playerSelection = prompt('Make your choice:', 'Rock, Paper, or Scissors');
console.log(playerSelection);

function oneRound(playerSelection, computerSelection) {
    'You Lose! Paper beats Rock'
}



