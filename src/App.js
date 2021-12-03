import React from "react";
import OngoingGames from "./components/OngoingGames";
import BeginningGames from "./components/BeginningGames";
import HistoricalResults from "./components/HistoricalResults";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <BeginningGames />
      <OngoingGames />
      <HistoricalResults />
    </Container>
  );
}

export default App;
