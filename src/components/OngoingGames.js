import React from "react";
import { useGlobalContext } from "../context";
import SingleOngoing from "./SingleOngoing";

function OngoingGames() {
  const { result } = useGlobalContext();

  if (result.length === 0) {
    return (
      <div className="matches">
        <h1 className="title">
          Ongoing games{" "}
          <span className="live">
            {" "}
            <span className="live-dot">&#9679; </span> Live
          </span>
        </h1>
        <h1>
          <p>No result to show</p>
        </h1>
      </div>
    );
  }

  return (
    <div className="matches">
      <h1 className="title">
        Ongoing games{" "}
        <span className="live">
          {" "}
          <span className="live-dot">&#9679; </span> Live
        </span>
      </h1>
      {result.map((game, index) => {
        return <SingleOngoing key={game.gameId} game={game} index={index} />;
      })}
    </div>
  );
}

export default OngoingGames;
