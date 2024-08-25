function getComputerChoice() {
    const choices = [ "rock", "paper", "scissors" ];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

// If there is a tie, function returns 0, -1 if computer wins and 1 if player wins
function playRound(playerChoice, computerChoice) {
    if(playerChoice === null || computerChoice === null) {
        return null;
    }
    
    console.log(`Player: ${playerChoice}\nComputer: ${computerChoice}`);

    if(playerChoice === computerChoice) {
        console.log("It's a tie!");
        return 0;
    }

    if(playerChoice === "rock") {
        if(computerChoice === "paper") {
            computerScore++;
            console.log("Paper beats rock, computer wins!");
            return -1;
        } else if(computerChoice === "scissors") {
            playerScore++;
            console.log("Rock beats scissors, you win!");
            return 1;
        }
    } else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            playerScore++;
            console.log("Paper beats rock, you win!");
            return 1;
        } else if(computerChoice === "scissors") {
            computerScore++;
            console.log("Scissors beats paper, computer wins!");
            return -1;
        }
    } else if(playerChoice === "scissors") {
        if(computerChoice === "paper") {
            playerScore++;
            console.log("Scissors beats paper, you win!");
            return 1;
        } else if(computerChoice === "rock") {
            computerScore++;
            console.log("Rock beats scissors, computer wins!");
            return -1;
        }
    }

    return null;
}

let playerScore = 0;
let computerScore = 0;
let winner = 0;

const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
        default:
            playRound(null, null);
            break;
    }

    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
});