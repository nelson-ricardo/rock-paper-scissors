let options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

let selectionButtons = document.querySelectorAll('button.selection-btn');
let currentWin = document.getElementById('current-status');
let playerScoreDOM = document.getElementById('score-player');
let computerScoreDOM = document.getElementById('score-computer');

function computerSelection() {
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection(e) {
    return e.target.textContent.toLowerCase();
}

selectionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(playerSelection(e), computerSelection());
    });
});



function playRound(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection === computerSelection: {
            currentWin.textContent = "Tie";
            return 0;
        }
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
        case playerSelection === 'rock' && computerSelection === 'scissors': {
            currentWin.textContent = "You Win";
            return 1;
        }
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
        case computerSelection === 'rock' && playerSelection === 'scissors': {
            currentWin.textContent = "You Lose";
            return 2;
        }
    }
}