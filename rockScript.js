const container = document.querySelector('#container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.createElement('div');
const para = document.createElement('p');
container.appendChild(results);
results.appendChild(para);

const para2 = document.createElement('p');
results.appendChild(para2);

const header2 = document.createElement('h2');
header2.setAttribute('style', 'color: red;');
results.appendChild(header2);

var playerScore = 0;
var computerScore = 0;

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
        para.textContent = `You win, ${playerSelection} beats ${computerChoice}`;
        return `You win, ${playerSelection} beats ${computerChoice}`, "player";
    } else if (playerSelection === 'Rock' && computerChoice === 'Scissors') {
        console.log(`You win, ${playerSelection} beats ${computerChoice}`);
        para.textContent = `You win, ${playerSelection} beats ${computerChoice}`;
        return `You win, ${playerSelection} beats ${computerChoice}`, "player";
    } else if (playerSelection === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You win, ${playerSelection} beats ${computerChoice}`);
        para.textContent = `You win, ${playerSelection} beats ${computerChoice}`;
        return `You win, ${playerSelection} beats ${computerChoice}`, "player";
    } else if (playerSelection === computerChoice) {
        console.log(`You rolled ${playerSelection} and opponent rolled ${computerChoice}. Tie!`);
        para.textContent = `You rolled ${playerSelection} and opponent rolled ${computerChoice}. Tie!`;
        return `You rolled ${playerSelection} and opponent rolled ${computerChoice}. Tie!`, "tie";
    } else {
        console.log(`You lose, ${computerChoice} beats ${playerSelection}`);
        para.textContent = `You lose, ${computerChoice} beats ${playerSelection}`;
        return `You lose, ${computerChoice} beats ${playerSelection}`, "computer";
    }
}

var gameHandler = function(playerSelection) {
    var winner = handler(playerSelection);
    if (winner === "computer") {
        computerScore++;
        para2.textContent = `Computer Score: ${computerScore}, Player Score: ${playerScore}`;
    } else if (winner === "player") {
        playerScore++;
    } else {
        
    }
    para2.textContent = `Computer Score: ${computerScore}, Player Score: ${playerScore}`;
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            header2.textContent = "You win!";
        } else {
            header2.textContent = "The computer beat you :(";
        }
        playerScore = 0;
        computerScore = 0;
    }
    return playerScore;
}

function setUp() {
    rock.addEventListener('click', function() {
        gameHandler('Rock');
    });
    paper.addEventListener('click', function() {
        gameHandler('Paper');
    });
    scissors.addEventListener('click', function() {
        gameHandler('Scissors');
    });
}

setUp();