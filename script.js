// getting random computer choice
function getComputerChoice(){
    const CHOICES = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random()*CHOICES.length);
    return CHOICES[randomChoice];
}
// comparing player and computer selection
function playRound(computerSelection,playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(computerSelection === playerSelection){
      return "Its a tie!, please try again."
    }
    let winningCombinations = {
      'rock' : 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
    }
    if(winningCombinations[playerSelection]===computerSelection){
      return `you win!, ${playerSelection} beats ${computerSelection}`;
    }else{
      return `you loose!, ${computerSelection} beats ${playerSelection}`;
    }
}
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for(let round = 1; round<=5; round++){
      let playerSelection =prompt("Please enter your selection","");
      let computerSelection = getComputerChoice();
      console.log(`Round ${round}`);
      console.log(`player seclection :${playerSelection}`);
      console.log(`computer seclection :${computerSelection}`);
      let result = playRound(computerSelection,playerSelection);
      console.log(result);
      if(result.includes('win')){
        playerScore++;
      }else{
        computerScore++;
      }
    }
    if(playerScore > computerScore){
      console.log('Congratulations!, you won the game');
    }else if(playerScore < computerScore){
      console.log('Sorry!, you lose the game');
    }else{
      console.log('Its a tie game');
    }
}
playGame();


