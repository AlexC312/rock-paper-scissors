let playerScore = 0;
let computerScore = 0;
let messageCheck = 0;

const message = document.createElement('div');
message.setAttribute('style', 'font-size: 50px; color: #2735cc;');

const score = document.querySelector('.score');
const player = document.getElementById('player-score');
const computer = document.getElementById('computer-score');
const refreshButton = document.getElementById('refresh');

const winMessage = document.createElement('div');
winMessage.setAttribute('style', 'font-size: 50px; color: #2735cc;');


function computerPlay() {

  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1)
    return 'Rock';
  else if (computerChoice === 2)
    return 'Paper';
  else
    return 'Scissors';
}

function getPlayerInput(e) {

  return `${e.target.textContent}`;
}

function playRound(e) {

  let computerSelection = computerPlay();
  let playerSelection = getPlayerInput(e);
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {

    messageCheck = 1;
    message.textContent = `It's a draw! Both players chose ${playerSelection[0].toLowerCase() + playerSelection.slice(1).toLowerCase()}`;
    document.querySelector('body').insertBefore(message, score);
  }
  else if (playerSelection.toLowerCase() === 'rock') {
    if (messageCheck === 1) {
      document.querySelector('body').removeChild(message);
      messageCheck = 0;
    }
    if (computerSelection.toLowerCase() === 'paper') {
      computerScore += 1;
      messageCheck = 1;
      message.textContent = 'Computer wins! Paper beats Rock';
      document.querySelector('body').insertBefore(message, score);
      computer.textContent = `Computer: ${computerScore}`;

    }
    else if (computerSelection.toLowerCase() === 'scissors') {
      playerScore += 1;
      messageCheck = 1;
      message.textContent = 'You win! Rock beats Scissors';
      document.querySelector('body').insertBefore(message, score);
      player.textContent = `Player: ${playerScore}`;
    }
  }
  else if (playerSelection.toLowerCase() === 'paper') {
    if (messageCheck === 1) {
      document.querySelector('body').removeChild(message);
      messageCheck = 0;
    }
    if (computerSelection.toLowerCase() === 'rock') {
      playerScore += 1;
      messageCheck = 1;
      message.textContent = 'You win! Paper beats Rock';
      document.querySelector('body').insertBefore(message, score);
      player.textContent = `Player: ${playerScore}`;
    }
    else if (computerSelection.toLowerCase() === 'scissors') {
      computerScore += 1;
      messageCheck = 1;
      message.textContent = 'Computer wins! Scissors beats paper';
      document.querySelector('body').insertBefore(message, score);
      computer.textContent = `Computer: ${computerScore}`;
    }
  }
  else if (playerSelection.toLowerCase() === 'scissors') {
    if (messageCheck === 1) {
      document.querySelector('body').removeChild(message);
      messageCheck = 0;
    }
    if (computerSelection.toLowerCase() === 'paper') {
      playerScore += 1;
      messageCheck = 1;
      message.textContent = 'You win! Scissors beats Paper';
      document.querySelector('body').insertBefore(message, score);
      player.textContent = `Player: ${playerScore}`;
    }
    else if (computerSelection.toLowerCase() === 'rock') {
      computerScore += 1;
      messageCheck = 1;
      message.textContent = 'Computer wins! Rock beats Scissors';
      document.querySelector('body').insertBefore(message, score);
      computer.textContent = `Computer: ${computerScore}`;
    }
  }
  if (playerScore > 4 || computerScore > 4) {
    buttons.forEach(button => {
      button.removeEventListener('click', playRound);
    });
    if (playerScore > computerScore) {
      winMessage.textContent = 'Congratulations! You win the game!';
      document.querySelector('body').appendChild(winMessage);
    }
    else {
      winMessage.textContent = 'Computer wins the game! Try harder next time!';
      document.querySelector('body').appendChild(winMessage);
    }

  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playRound);
})

function refresh() {

  refresh = location.reload();
}

refreshButton.addEventListener('click', refresh, false);