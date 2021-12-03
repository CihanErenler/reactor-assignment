import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [newGame, setNewGame] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [historical, setHistorical] = useState(null);

  const base = "wss://bad-api-assignment.reaktor.com";
  const base_url = "https://bad-api-assignment.reaktor.com";

  // Triggered every initial render
  useEffect(() => {
    setLoading(true);
    const client = new WebSocket(`${base}/rps/live`);
    client.onopen = () => {
      setLoading(false);
      console.log("connected");
    };

    client.onmessage = (message) => {
      // Remove all the back slashes from the data string
      const data = message.data.replace(/\\/g, "");
      // Remove quotes from beginning and the end of the data string
      // then parse it to a js object
      const result = JSON.parse(data.slice(1, data.length - 1));
      seperate(result);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seperate = (data) => {
    if (data.type === "GAME_BEGIN") {
      return setNewGame((current) => {
        const temp = current.length > 30 ? current.slice(0, 30) : current;
        return [data, ...temp];
      });
    }

    if (data.type === "GAME_RESULT") {
      return setResult((current) => {
        const temp = current.length > 30 ? current.slice(0, 30) : current;
        return [data, ...temp];
      });
    }
  };

  const handlePlayerClick = async (name) => {
    console.log(name);
    const data = await fetch(`${base_url}/rps/history`);
    const response = await data.json();

    const personList = response.data.reduce((total, current) => {
      if (current.playerA.name === name || current.playerB.name === name) {
        total.push(current);
      }
      return total;
    }, []);

    console.log(personList);
    setHistorical(personList);
  };

  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          seperate,
          newGame,
          result,
          loading,
          handlePlayerClick,
          historical,
        }}
      >
        {children}
      </AppContext.Provider>
      ;
    </React.Fragment>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
