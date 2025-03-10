import "../App.css";


function Questionpage() {
  

  return (
    <div className="ques-container">
     <img
        src="/plant1.png" 
        alt="plant"
        className="plant1-button"
      />
      <img
        src="/plant1.png" 
        alt="plant"
        className="plant2-button"
      />
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
      
    </div>
  );
}

export default Questionpage;
