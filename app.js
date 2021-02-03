const game = ()=> {
    //initialize scores to start at zero
    let pScore = 0;
    let cScore = 0;

 //Function to start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //Start the Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll ('.hands img');

      // have the hands do the shake animation each round
      hands.forEach(hand => {
          hand.addEventListener('animationend', function() {
              this.style.animation = '';
          })
      })

      //Need computer options to be randomly generated
      //Start with an array of the 3 options it can choose
      const computerOptions = ["rock", "paper", "scissors"];

      //then create the randomly generated sequence to assign computer choice
      options.forEach((option) => {
        option.addEventListener("click", function () {
          //   console.log(this);
          const computerNumber = Math.floor(Math.random() * 3);
          // console.log(computerNumber);
          const computerChoice = computerOptions[computerNumber];
          // console.log(computerChoice);

          setTimeout(()=> {
            //Call the compareHands function each time
            compareHands(this.textContent, computerChoice);

            // Update hand signal images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          
          // Add in the animation of the hands
          playerHand.style.animation = 'shakePlayer 2s ease';
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });  
    };

    const updateScore = () => {
       const playerScore = document.querySelector('.player-score p');
       const computerScore = document.querySelector(".computer-score p");
       playerScore.textContent = pScore;
       computerScore.textContent = cScore;
    }

    // We need to compare hands each time the computer has chosen a random option
    const compareHands = (playerChoice, computerChoice) => {
      // update text
      const winner = document.querySelector(".winner");

      // first we want to check if there is a tie.
      if (playerChoice === computerChoice) {
        winner.textContent = "It's a tie.";
        return;
      }

      // check for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins!";
          cScore++;
          updateScore();
          return;
        }
      }

      // check for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins!";
          pScore++;
          updateScore();
          return;
        }
      }

      // check for paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins!";
          pScore++;
          updateScore();
          return;
        }
      }
    };


    //Now Call all the inner functions
    startGame();
    playMatch();
    // updateScore();
}

//start the game function
game();