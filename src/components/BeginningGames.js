import React from "react";
import { useGlobalContext } from "../context";

function BeginningGames() {
  const { newGame } = useGlobalContext();

  if (newGame.length === 0) {
    return (
      <div className="matches">
        <h1 className="title">Beginning games</h1>
        <p>No result to show</p>
      </div>
    );
  }

  return (
    <div className="matches ">
      <h1 className="title">Beginning games</h1>
      <div>
        {newGame.map((game) => {
          const { gameId, playerA, playerB } = game;
          return (
            <div key={gameId} className="match beginning-game">
              <span className="player-name">{playerA.name}</span>{" "}
              <span className="versus">Vs</span>
              <span className="player-name">{playerB.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BeginningGames;
