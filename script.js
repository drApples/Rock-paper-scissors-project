
function computerPlay() {
    if (Math.random() * 3 < 1) {
        return 'Rock';
    }
    else if (Math.random() * 3 < 2) {
        return 'Paper';
    }
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    const playcomb = playerSelection + computerSelection;
    if (playcomb === 'RockScissors' || playcomb === 'PaperRock' || playcomb === 'ScissorsPaper') {
        return 1;
    }
    else if (playerSelection === computerSelection) {
        return 0;
    }
    return -1;
}

function formatInput(str) {
    if (str.trim().toLowerCase() === 'rock') {
        return 'Rock';
    }
    else if (str.trim().toLowerCase() === 'paper') {
        return 'Paper';
    }
    else if (str.trim().toLowerCase() === 'scissors') {
        return 'Scissors'
    }
    return null;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    while (playerScore !== 5 && computerScore !== 5) {
        playerSelection = formatInput(prompt('Choose your weapon'));
        computerSelection = computerPlay();
        if (playerSelection === null) {
            console.log('Wrong input!! try again');
        }
        else {
            switch (playRound(playerSelection, computerSelection)) {
                case 1:
                    playerScore++;
                    console.log('You won! ' + playerSelection + ' beats ' + computerSelection);
                    break;
                case 0:
                    console.log('It is a tie! ' + playerSelection + ' and ' + computerSelection);
                    break;
                case -1:
                    computerScore++;
                    console.log('You lost! ' + computerSelection + ' beats ' + playerSelection);
                    break;
            }
            console.log('Score:\n' + 'Player: ' + playerScore + ' Computer: ' + computerScore);
        }
    }
    if (playerScore > computerScore) {
        return 'Congratulations! You won a game ' + playerScore + ' to ' + computerScore
    }
    return 'Unfortunatly you lost against computer ' + playerScore + ' to ' + computerScore;
}

console.log(game());