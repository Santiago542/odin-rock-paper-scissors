function getComputerChoice() {
    const choices = [ "rock", "paper", "scissors" ];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Enter your choice:\n rock or 0\n paper or 1\n scissors or 2");

    if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else if(parseInt(choice) === 0) {
        return "rock";
    } else if(parseInt(choice) === 1) {
        return "paper";
    } else if(parseInt(choice) === 2) {
        return "scissors";
    }

    return null;
}
// If there is a tie, function returns 0, -1 if computer wins and 1 if human wins
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return 0;
    }

    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            return -1;
        } else if(computerChoice === "scissors") {
            return 1;
        }
    } else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            return 1;
        } else if(computerChoice === "scissors") {
            return -1;
        }
    } else if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            return 1;
        } else if(computerChoice === "rock") {
            return -1;
        }
    }

    return null;
}

function playGame(humanScore, computerScore) {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        while(humanChoice === null) {
            console.log("Invalid choice. Please try again.");
            humanChoice = getHumanChoice();
        }

        console.log(`You selected ${humanChoice} and the computer selected ${computerChoice}`);

        let winner = playRound(humanChoice, computerChoice);
        console.log(`Round ${i + 1}: ${winner === 0 ? "It's a tie!" : winner === 1 ? "You win!" : "Computer wins!"}`);
        if(winner === 1) {
            humanScore++;
        } else if(winner === -1) {
            computerScore++;
        }
    }

    if(humanScore === computerScore) {
        return "It's a tie!";
    }

    return humanScore > computerScore ? "You win!" : "Computer wins!";
}

console.log("Welcome to the rock paper scissors game!");

let humanScore = 0;
let computerScore = 0;

console.log(playGame(humanScore, computerScore));