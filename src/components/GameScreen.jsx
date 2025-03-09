import "../App.css";
import { useNavigate } from "react-router-dom";

const GameScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="game-container">
      
      <img
        src="/help.png" // ✅ Remove 'public/'
        alt="Help"
        className="help-button"
        onClick={() => navigate("/nextpage")}
      />

      <img
        src="/settings.png" // ✅ Remove 'public/'
        alt="Settings"
        className="settings-button"
        onClick={() => alert("Settings Button Clicked!")}
      />

      <img
        src="/play-button.png" // ✅ Remove 'public/'
        alt="Play"
        className="play-button"
        onClick={() => alert("Play Button Clicked!")}
      />
    </div>
  );
};

export default GameScreen;
