const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetgame() {
 winner = []
 document.querySelector('.playerScore').textContent = 'Player score: 0';
 document.querySelector('.computerScore').textContent = 'Computer score: 0';
 document.querySelector('.ties').textContent = 'Ties: 0';
 document.querySelector('.winner').textContent = "";
 document.querySelector('.playerChoice').textContent = "";
 document.querySelector('.compuerChoice').textContent = "";
 document.querySelector('.reset').style.display = "none";
}

function startgame() {
  // play the game until someone wins five times
    let butts =document.querySelectorAll('button')
    butts.forEach((butt) => butt.addEventListener(('click'), () =>{
        if(butt.id) {
            playRound(butt.id)
        }
    })
    );
}

function playRound(playerChoice) {
    let wins = countWins();
    if(wins>= 5 ){
        return
    }
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);

  winners.push(winner);
  logWins();
  displayRound(playerChoice,computerChoice,winner);
  wins = checkWins();
  if(wins ==5) {
    displayEnd()
  }
}
  function displayEnd(){
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5){
        document.querySelector('.winner').textContent = 'You won five games congrats'
    } else
    document.querySelector('.winner').textContent ='Sorry the computer won five times'
  }



  function displayRound(playerChoice,computerChoice,winner) {
    document.querySelector('.playerChoice').textContent = `You choose ${playerChoice}`;
    document.querySelector('.computerChoice').textContent = `The comp choose ${computerChoice}`;
    
    displayRoundWinner(winner);

  logRound(playerSelection, computerSelection, winner, round);
}


function displayRoundWinner(winner) {
 if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round"
 } else if (winner == "Computer") {
    document.querySelector(".winner").textContent = "Comp won the round"
 } else {
    document.querySelector(".winner").textContent = "The round was a tie";
 }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
    
    
  }

function computerSelect() {
    //update the DOm with computer selection
  return choices[Math.floor(Math.random() * choices.length)];
}





function countWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
 return Math.max(playerWins,computerWins)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }

function setWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

startgame()


