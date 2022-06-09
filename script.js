function computerPlay() {

  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1)
    return 'Rock';
  else if (computerChoice === 2)
    return 'Paper';
  else
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {

    return `It's a draw! Both players chose ${playerSelection[0].toLowerCase() + playerSelection.slice(1).toLowerCase()}`;
  }
  else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection.toLowerCase() === 'paper') {

      return 'Computer wins! Paper beats Rock';
    }
    else if (computerSelection.toLowerCase() === 'scissors') {
      return 'You win! Rock beats Scissors';
    }
  }
  else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection.toLowerCase() === 'rock') {

      return 'You win! Paper beats Rock';
    }
    else if (computerSelection.toLowerCase() === 'scissors') {
      return 'Computer wins! Scissors beats paper';
    }
  }
  else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection.toLowerCase() === 'paper') {

      return 'You win! Scissors beats Paper';
    }
    else if (computerSelection.toLowerCase() === 'rock') {
      return 'Computer wins! Rock beats Scissors';
    }
  }
  else
    return 'Invalid choice!!!';
}
