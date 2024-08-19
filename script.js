function getComputerChoice() {
    const choices = [ "rock", "paper", "scissors" ];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getHumanChoice(choice) {
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

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            return "Computer wins: paper beats rock!";
        } else if(computerChoice === "scissors") {
            return "You win: rock beats scissors!";
        }
    } else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            return "You win: paper beats rock!";
        } else if(computerChoice === "scissors") {
            return "Computer wins: scissors beats paper!";
        }
    } else if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            return "You win: scissors beats rock!";
        } else if(computerChoice === "rock") {
            return "Computer wins: rock beats scissors!";
        }
    }

    return null;
}

console.log("Welcome to the rock paper scissors game!");

const choice = getHumanChoice(prompt("Enter your choice:\n rock or 0\n paper or 1\n scissors or 2"));

if(choice === null) {
    console.log("Invalid choice. Please try again.");
}

console.log(choice);

let humanScore = 0;
let computerScore = 0;