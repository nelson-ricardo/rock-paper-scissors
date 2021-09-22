function computerSelection() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    let selection = prompt("Rock, paper, scissors?", "rock").toLowerCase();
    
    let options = ['rock', 'paper', 'scissors'];

    while(!options.includes(selection)) {
        selection = prompt("Rock, paper, scissors?", "rock").toLowerCase();
    }

    return selection;
}

