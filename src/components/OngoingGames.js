import React from "react";
import rock from "../assets/rock.svg";
import paper from "../assets/paper.svg";
import scissor from "../assets/scissor.svg";
import { useGlobalContext } from "../context";

function OngoingGames() {
  const { result, handlePlayerClick } = useGlobalContext();

  const checkHand = (hand) => {
    if (hand === "ROCK") return rock;
    if (hand === "PAPER") return paper;
    if (hand === "SCISSORS") return scissor;
  };

  const checkWinner = (player1, player2) => {
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

  const checkDate = (x) => {
    return x < 10 ? "0" + x : x;
  };

  return (
    <div className="matches">
      <h1 className="title">
        Ongoing games <span className="live">&#9679; Live</span>
      </h1>
      {result.map((game, index) => {
        const { gameId, playerA, playerB } = game;
        const time = new Date(game.t);
        return (
          <div key={gameId} className="ongoing">
            <span className="ongoing-index">#{index + 1}</span>
            <div
              className={`${
                checkWinner(playerA.played, playerB.played) &&
                checkWinner(playerA.played, playerB.played) !== "draw"
                  ? "player winner"
                  : "player"
              }`}
            >
              <span className="player-name">{playerA.name}</span>
              <img
                className="hand"
                src={checkHand(playerA.played)}
                alt="hand"
              />
            </div>
            <div
              className={`${
                checkWinner(playerB.played, playerA.played) &&
                checkWinner(playerB.played, playerA.played) !== "draw"
                  ? "player winner"
                  : "player"
              }`}
            >
              <span
                className="player-name"
                onClick={() => handlePlayerClick(playerB.name)}
              >
                {playerB.name}
              </span>
              <img
                className="hand"
                src={checkHand(playerB.played)}
                alt="hand"
              />
            </div>
            <span className="time">{`${checkDate(time.getHours())}:${checkDate(
              time.getMinutes()
            )}`}</span>
          </div>
        );
      })}
    </div>
  );
}

export default OngoingGames;
