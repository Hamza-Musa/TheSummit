/* Instructions/Task: 
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

//My Answer
const rps = (p1, p2) => {
  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();

  p2.toLowerCase();

  if (
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  } else if (
    (p2 === "paper" && p1 === "rock") ||
    (p2 === "rock" && p1 === "scissors") ||
    (p2 === "scissors" && p1 === "paper")
  ) {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};

//Test Cases
console.log(rps("rock", "scissors"));
console.log(rps("Rock", "Scissors"));
