/*
Your game is going to play against the computer, 
so begin with a function called computerPlay that 
will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
. We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!

*/
// Function computerPlay() -> return random [rock, paper, scissors]
function computerPlay() {
  // Define initial list of values
  const choices = ['rock', 'paper', 'scissors']
  // Random select from list of values
  const randIdx = Math.floor(Math.random() * choices.length)
  // return randomly selected value
  return choices[randIdx]
}

/*
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - 
the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"

*/
function playRound(playerSelection, computerSelection) {
  const playerSelect = playerSelection.toLowerCase()
  const computerSelect = computerSelection.toLowerCase()
  // compare player to computer
  let score = 0 // 1 - player wins, -1 - computer wins, 0 - tie
  
  if (playerSelect === computerSelect) {
      score = 0
  }
  else if ((playerSelect === 'rock' && computerSelect === 'scissors')
          || (playerSelect === 'paper' && computerSelect === 'rock')
          || (playerSelect === 'scissors' && computerSelect === 'paper')) {
              score = 1
          } 
  else {
      score = -1
  }

  return score
}


function game(numRounds) {

  // Call playRound inside game
  // 5 rounds of games

  // use prompt to get input from user
  let score = 0
  for (let i = 0; i < numRounds; i++) {
      playerSelection = prompt("What's your move? (Rock, Paper, Scissors)")
      computerSelection = computerPlay()

      // keep score and report winner at end

      // First one to 3 wins
          // playRound can return a 1 (player wins), 0 (tie), -1 (player loses)
      score += playRound(playerSelection, computerSelection) // 1 0 or -1
      // rock, paper -> 1
      // paper, scissors -> 0
      // paper, scissors -> -1
      // rock, paper -> 0
      // rock ,paper -> 1

      // Win 3 straight
      if (score == 3) {
          console.log("Player wins!")
          return
      }
      else if (score == -3) {
          console.log("Player loses!")
          return
      }
  }

  // Full 5 games run, see final result
  if (score > 0) {
      console.log("Player wins!")
  }
  else if (score < 0) {
      console.log("Player loses!")
  }
  else {
      console.log("It's a tie!")
  }
}

// Run in terminal
game(5)