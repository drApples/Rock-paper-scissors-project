const buttons = document.querySelectorAll('.playerButton');
const message = document.querySelector('h1');
const shownScore = document.querySelectorAll('.shownScore');
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener('click', e => {
    game(e.target.parentElement.id, computerPlay());
}));

function computerPlay() {
    if (Math.random() * 3 < 1) {
        return 'Rock';
    }
    else if (Math.random() * 3 < 2) {
        return 'Paper';
    }
    return 'Scissors';
}

function updateMessage(whowon, playerSelection, computerSelection) {
    switch (whowon) {
        case 1:
            message.innerText = 'You won! ' + playerSelection + ' beats ' + computerSelection;
            break;
        case 0:
            message.innerText = 'It is a tie! ' + playerSelection + ' against ' + computerSelection;
            break;
        case -1:
            message.innerText = 'You lost! ' + playerSelection + ' is beaten by ' + computerSelection;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const playcomb = playerSelection + computerSelection;
    if (playcomb === 'RockScissors' || playcomb === 'PaperRock' || playcomb === 'ScissorsPaper') {
        playerScore++;
        updateMessage(1, playerSelection, computerSelection)
    }
    else if (playerSelection === computerSelection) {
        updateMessage(0, playerSelection, computerSelection)
    }
    else {
        computerScore++;
        updateMessage(-1, playerSelection, computerSelection)
    }
}


function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);
    shownScore[0].innerText = playerScore;
    shownScore[1].innerText = computerScore;
    if (playerScore === 5) {
        confirm('Congratulations! You won a game ' + playerScore + ' to ' + computerScore)
        playerScore = 0;
        computerScore = 0;
        shownScore[0].innerText = '';
        shownScore[1].innerText = '';
    }
    else if (computerScore === 5) {
        confirm('Unfortunatly you lost against computer ' + playerScore + ' to ' + computerScore);
        message.innerText = 'Let\'s play again';
        computerScore = 0;
        playerScore = 0;
        shownScore[0].innerText = '-';
        shownScore[1].innerText = '-';
    }
}


