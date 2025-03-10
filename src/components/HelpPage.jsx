import "../App.css";
import { useNavigate } from "react-router-dom";

function HelpPage() {
  const navigate = useNavigate();

  return (
    <div className="help-container">
      <img
        src="/push-button.png"
        alt="Play"
        className="push-button"
        onClick={() => alert("You got it, you pushed the button!")}
      />
      <img
        src="/start-btn.png"
        alt="Play"
        className="start-btn"
        onClick={() => navigate("/questionpage")}
      />
      
    </div>
  );
}

export default HelpPage;
