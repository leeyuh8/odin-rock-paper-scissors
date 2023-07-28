let options = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;
let computerDialogue;
let playerDialogue;


function getComputerChoice() { 
    computerSelection = options[Math.floor(Math.random() * 3)];
    computerDialogue = 'Computer: ' + computerSelection;
    console.log(computerDialogue);
}


// function getPlayerChoice() {
//     // playerSelection = prompt('Make your choice:', 'Rock, Paper, or Scissors');
//     // playerDialogue = 'You: ' + playerSelection;
//     // console.log(playerDialogue);
// }


function playRound(playerSelection, computerSelection) {
    /*  - store what button option the player clicked
        - run getComputerChoice
        - compare player choice and computer choice
    */
    playerSelection = this.getAttribute('value');
    console.log(playerSelection);
    getComputerChoice();
    
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'Rock':
                console.log('Tie!');
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