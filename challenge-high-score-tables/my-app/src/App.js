import React from "react";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores.js";
import "./App.css";

function App() {
  return <HighScoreTable scores={allCountryScores} />;
}

export default App;
