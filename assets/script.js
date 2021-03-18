// <!-- # Unit 03 Mini-Project: Rock, Paper, Scissors

// In this activity, you will work with a group to build a game using only JavaScript.

// ## Instructions

// The completed application should meet the following criteria:

// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// * As a user, I expect the computer to choose R, P, or S in return.

// * As a user, I want the option to play again whether I win or lose.

// * As a user, I want to see my total wins, ties, and losses after each round.

// ### Specifications

// * Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

// * The computer's selection must be random to ensure a fair game. -->


// Ask the user if they're ready to play - and add a reminder that paper > rock, rock > scissors, and scissors > paper. (Use the confirm or the alert)

// Display a message to the user to tell them they can choose between rock, paper, or scissors

// Once the user enters that, we'll want to have the computer generate a random selection of rock, paper, or scissors

// We'll want to determine who won and alert the user if they won, lost, or if it was a tie.

// We'll want to display the stats to the user so they know how many times they've won, lost, or tied.

// We'll want to ask them if they want to play again.



// Data Storage

// Save the stats as an Object

// let stats = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
// }

alert("Welcome! Are you ready to play?");

alert("Reminder: paper > rock, rock > scissors, and scissors > paper");

let handSelection = prompt("Choose r for rock, p for paper, or s for scissors");

console.log(handSelection);