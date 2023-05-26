function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);
    console.log(`computer choice number is ${computerChoice}`)
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection === 'Paper' && computerChoice === 'Rock') {
        return `You win, ${playerSelection} beats ${computerChoice}`;
    } else if (playerSelection === 'Rock' && computerChoice === 'Scissors') {
        return `You win, ${playerSelection} beats ${computerChoice}`;
    } else if (playerSelection === 'Scissors' && computerChoice === 'Paper') {
        return `You win, ${playerSelection} beats ${computerChoice}`;
    } else if (playerSelection === computerChoice) {
        return `You rolled ${playerSelection} and opponent rolled ${computerChoice}. Tie!`
    } else {
        return `You lose, ${computerChoice} beats ${playerSelection}`;
    }
}

function game() {
    var score = 0;
    roundsPlayed = 5;
    for (let i = 0; i < roundsPlayed; i++) {
        var playerSelection = prompt("Choose \'Rock\', \'Paper\', or \'Scissors\'");
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    return score;
}

game();