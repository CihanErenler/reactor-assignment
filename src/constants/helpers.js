import rock from "../assets/rock.svg";
import paper from "../assets/paper.svg";
import scissor from "../assets/scissor.svg";

export const checkWinner = (player1, player2) => {
  if (player1 === "ROCK" && player2 === "ROCK") return "draw";
  if (player1 === "ROCK" && player2 === "PAPER") return false;
  if (player1 === "ROCK" && player2 === "SCISSORS") return true;
  if (player1 === "PAPER" && player2 === "ROCK") return true;
  if (player1 === "PAPER" && player2 === "PAPER") return "draw";
  if (player1 === "PAPER" && player2 === "SCISSORS") return false;
  if (player1 === "SCISSORS" && player2 === "ROCK") return false;
  if (player1 === "SCISSORS" && player2 === "PAPER") return true;
  if (player1 === "SCISSORS" && player2 === "SCISSORS") return "draw";
};

export const checkHand = (hand) => {
  if (hand === "ROCK") return rock;
  if (hand === "PAPER") return paper;
  if (hand === "SCISSORS") return scissor;
};

export const checkDate = (x) => {
  return x < 10 ? "0" + x : x;
};
