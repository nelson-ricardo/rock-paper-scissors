function computerSelection() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    let selection = getPlayerSelection();
    
    let options = ['rock', 'paper', 'scissors'];

    while(!options.includes(selection)) {
        selection = getPlayerSelection();
    }

    return selection;
}

function getPlayerSelection() {
    return prompt("Rock, paper, scissors?", "rock").toLowerCase();
}