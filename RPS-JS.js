// parsed the JSON string that has the scores
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
  updateScore();
/*
if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };
};
*/
const computerPick = computerMove();

function computerMove() {

  let computerPick = '';

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerPick = 'rock'; 
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerPick = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerPick = 'scissors';
}
  return computerPick;
}

function playGame (playersMove) {

  const computerPick = computerMove();

  let result = '';

if(playersMove === 'scissors') {  
  if (computerPick === 'rock') {
    result = `You lost.`;
  }
  else if (computerPick === 'scissors') {
    result = `It's a tie.`;
  }
  else if (computerPick === 'paper') {
    result = `You win!`;
  }
}

else if (playersMove === 'paper') {
  if (computerPick === 'rock') {
    result = `You win!`;
  }
  else if (computerPick === 'scissors') {
    result = `You lost.`;
  }
  else if (computerPick === 'paper') {
    result = `It's a tie.`;
  }
}

else if (playersMove === 'rock') {
  if (computerPick === 'rock') {
    result = `It's a tie.`;
  }
  else if (computerPick === 'scissors') {
    result = `You win!`;
  }
  else if (computerPick === 'paper') {
    result = `You lost.`;
}
}

if (result === `You win!`) {
  score.wins += 1;
} 
else if (result === `You lost.`) {
  score.loses += 1;
} 
else if (result === `It's a tie.`) {
  score.ties += 1;
}

document.querySelector('.result').innerText = `${result}`;

showMove(playersMove, computerPick);
// saves the score in localStorage
// turns object into string
const stringScore = JSON.stringify(score);
// first parameter is the variable name (must be a string)
// second parameter is what you are storing
localStorage.setItem('score', stringScore);

updateScore();
/*
alert(`You picked ${playersMove}. Computer picked ${computerPick}. ${result}
Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}.`);
*/
}

function showMove(playersMove, computerPick) {
  document.querySelector('.moves').innerHTML = `You picked <img src="Images/${playersMove}-emoji.png" alt="${playersMove}" class="move-icon">. Computer picked <img src="Images/${computerPick}-emoji.png" alt="${computerPick}" class="move-icon">.`;
}

function updateScore() {
  document.querySelector('.showScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}