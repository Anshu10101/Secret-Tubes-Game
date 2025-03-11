import "../App.css";

function Questionpage() {
  return (
    <div className="ques-container">
      <img src="/plant1.png" alt="plant" className="plant1-button" />
      <img src="/plant1.png" alt="plant" className="plant2-button" />
      <img
        src="/true.png" // ✅ Remove 'public/'
        alt="Help"
        className="true-button"
      />
      <img
        src="/false.png" // ✅ Remove 'public/'
        alt="Help"
        className="false-button"
      />
      <img
        src="/gr1.png" // ✅ Remove 'public/'
        alt="Help"
        className="gr1-button"
      />
      <img
        src="/gr2.png" // ✅ Remove 'public/'
        alt="Help"
        className="gr2-button"
      />
      <img
        src="/gr3.png" // ✅ Remove 'public/'
        alt="Help"
        className="gr3-button"
      />
      <img
        src="/rr1.png" // ✅ Remove 'public/'
        alt="Help"
        className="rr1-button"
      />
      <img
        src="/rr2.png" // ✅ Remove 'public/'
        alt="Help"
        className="rr2-button"
      />
      <img
        src="/rr3.png" // ✅ Remove 'public/'
        alt="Help"
        className="rr3-button"
      />
    </div>
  );
}

export default Questionpage;
