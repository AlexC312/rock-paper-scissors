function computerPlay() {

  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1)
    return 'Rock';
  else if (computerChoice === 2)
    return 'Paper';
  else
    return 'Scissors';
}
