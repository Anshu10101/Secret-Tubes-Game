import "../App.css";
import { useNavigate } from "react-router-dom";

const GameScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="game-container">
      <img
        src="/help.png"
        alt="Help"
        className="help-button"
        onClick={() => navigate("/nextpage")}
      />

      <img
        src="/settings.png"
        alt="Settings"
        className="settings-button"
        onClick={() => alert("Settings Button Clicked!")}
      />

      <img
        src="play-button.png"
        alt="Play"
        className="play-button"
        onClick={() => navigate("/questionpage")}
      />
    </div>
  );
};

export default GameScreen;
