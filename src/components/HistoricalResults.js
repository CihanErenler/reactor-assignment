import React, {useState, useEffect} from "react";
import { useGlobalContext } from "../context";

function HistoricalResults() {
  const [mostUsed, setMostUse] = useState({});
  const {historical} = useGlobalContext();

  useEffect(() => {
    
  }, [])



  return (
    <div className="results matches">
      <h1 className="title">Historical results</h1>
      <p className="">Click a player name to display historical results</p>
    </div>
  );
}

export default HistoricalResults;
