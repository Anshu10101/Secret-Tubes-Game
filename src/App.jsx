import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Ensure this file exists in the src directory
import GameScreen from "./components/GameScreen";
import HelpPage from "./components/HelpPage"; // ✅ Import HelpPage
import Questionpage from "./components/Questionpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameScreen />} />
        <Route path="/nextpage" element={<HelpPage />} /> 
        <Route path="/questionpage" element={<Questionpage />} />
      </Routes>
    </Router>
  );
};

export default App;
