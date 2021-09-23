let options = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll('button.selection-btn');

function computerSelection() {
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection(e) {
    let selection = e.target.textContent.toLowerCase();
    console.log(selection, selection.length);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(playerSelection(), computerSelection());
    });
})

function playRound(playerSelection, computerSelection) {
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