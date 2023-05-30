var computer = function() {
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

var handler = function(playerSelection) {
    var computerChoice = computer();
    if (playerSelection === 'Paper' && computerChoice === 'Rock') {
        console.log(`You win, ${playerSelection} beats ${computerChoice}`);
        return `You win, ${playerSelection} beats ${computerChoice}`;
    } else if (playerSelection === 'Rock' && computerChoice === 'Scissors') {
        console.log(`You win, ${playerSelection} beats ${computerChoice}`);
        return `You win, ${playerSelection} beats ${computerChoice}`;
    } else if (playerSelection === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You win, ${playerSelection} beats ${computerChoice}`);
        return `You win, ${playerSelection} beats ${computerChoice}`;
    } else if (playerSelection === computerChoice) {
        console.log(`You rolled ${playerSelection} and opponent rolled ${computerChoice}. Tie!`);
        return `You rolled ${playerSelection} and opponent rolled ${computerChoice}. Tie!`
    } else {
        console.log(`You lose, ${computerChoice} beats ${playerSelection}`);
        return `You lose, ${computerChoice} beats ${playerSelection}`;
    }
}

function game() {
    /*var score = 0;
    roundsPlayed = 5;
    for (let i = 0; i < roundsPlayed; i++) {
        var playerSelection = prompt("Choose \'Rock\', \'Paper\', or \'Scissors\'");
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    return score;*/
}

function setUp() {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', function() {
        handler('Rock');
    });
    paper.addEventListener('click', function() {
        handler('Paper');
    });
    scissors.addEventListener('click', function() {
        handler('Scissors');
    });
}

setUp();

//game();