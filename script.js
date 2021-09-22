let options = ['rock', 'paper', 'scissors'];

function computerSelection() {
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    let selection = getPlayerSelection();

    while(!options.includes(selection)) {
        selection = getPlayerSelection();
    }

    return selection;
}

function getPlayerSelection() {
    return prompt("Rock, paper, scissors?", "rock").toLowerCase();
}

function round(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection === computerSelection: {
            return 'TIE';
        }
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
        case playerSelection === 'rock' && computerSelection === 'scissors': {
            return `YOU WIN!! ${playerSelection} beats ${computerSelection}`;
        }
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
        case computerSelection === 'rock' && playerSelection === 'scissors': {
            return `YOU LOSE, ${computerSelection} beats ${playerSelection}`;
        }
    }
}

console.log(round(playerSelection(), computerSelection()));