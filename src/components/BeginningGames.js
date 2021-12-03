import React from "react";
import { useGlobalContext } from "../context";

function BeginningGames() {
  const { newGame } = useGlobalContext();

  return (
    <div className="matches ">
      <h1 className="title">Beginning games</h1>
      {newGame.map((game) => {
        const { gameId, playerA, playerB } = game;
        return (
          <div key={gameId} className="match beginning-game">
            <span>{playerA.name}</span> <span className="versus">Vs</span>
            <span>{playerB.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BeginningGames;
