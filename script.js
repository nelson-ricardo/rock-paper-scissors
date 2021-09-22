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
            return 0;
        }
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
        case playerSelection === 'rock' && computerSelection === 'scissors': {
            return 1;
        }
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
        case computerSelection === 'rock' && playerSelection === 'scissors': {
            return 2;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let currentSelections = round(playerSelection(), computerSelection());

        if(currentSelections === 1) {
            playerScore++;
            console.log('You won this round!');
        } else if(currentSelections === 2) {
            computerScore++;
            console.log("You lose this round");
        } else {
            console.log('This round was a tie');
        }

        console.table({
            playerScore,
            computerScore
        });
    }

    
}

game();