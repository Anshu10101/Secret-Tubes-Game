import "../App.css";


function HelpPage() {
  

  return (
    <div className="help-container">
      <img
        src="/push-button.png"
        alt="Play"
        className="push-button"
        onClick={() => alert("You got it, you pushed the button!")}
      />
      
    </div>
  );
}

export default HelpPage;
