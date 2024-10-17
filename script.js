function playGame(playerChoice) {
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result = '';
  
    if (playerChoice === computerChoice) {
      result = 'It\'s a tie!!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      result = 'You win!!';
    } else {
      result = 'Computer wins!!';
    }
  
    document.getElementById('player-choice').textContent = `Your choice: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer choice: ${computerChoice}`;
    document.getElementById('game-result').textContent = `Result: ${result}`;
  }
  