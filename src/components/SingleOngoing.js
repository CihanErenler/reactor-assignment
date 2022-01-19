import React from "react";
import { checkWinner, checkHand, checkDate } from "../constants/helpers";
import { useGlobalContext } from "../context";

const SingleOngoing = ({ index, game }) => {
  const { gameId, playerA, playerB } = game;
  const { handleName } = useGlobalContext();
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
        <span className="player-name" onClick={() => handleName(playerA.name)}>
          {playerA.name}
        </span>
        <img className="hand" src={checkHand(playerA.played)} alt="hand" />
      </div>
      <div
        className={`${
          checkWinner(playerB.played, playerA.played) &&
          checkWinner(playerB.played, playerA.played) !== "draw"
            ? "player winner"
            : "player"
        }`}
      >
        <span className="player-name" onClick={() => handleName(playerB.name)}>
          {playerB.name}
        </span>
        <img className="hand" src={checkHand(playerB.played)} alt="hand" />
      </div>
      <span className="time">{`${checkDate(time.getHours())}:${checkDate(
        time.getMinutes()
      )}`}</span>
    </div>
  );
};

export default SingleOngoing;
