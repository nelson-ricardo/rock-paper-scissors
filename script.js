function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

console.log(computerPlay());