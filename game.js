function playGame(choice) {
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (choice === computerChoice) {
        result = "Tie !!";
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'scissors' && computerChoice === 'papper') ||
        (choice === 'papper' && computerChoice === 'rock')
    ) {
        result = "You Win !!";
    } else {
        result = "Computer Win !!"
    }

    document.getElementById('player-choice').textContent = ` ${choice}`;
    document.getElementById('computer-choice').textContent = ` ${computerChoice}`;
    document.getElementById('game-result').textContent = ` ${result}`;
}