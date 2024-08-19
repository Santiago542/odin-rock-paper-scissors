function getComputerChoice() {
    const choices = [ "rock", "paper", "scissors" ];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getHumanChoice(choice) {
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else if(parseInt(choice) === 0) {
        return "rock";
    } else if(parseInt(choice) === 1) {
        return "paper";
    } else if(parseInt(choice) === 2) {
        return "scissors";
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