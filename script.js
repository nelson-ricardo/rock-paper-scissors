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

