import "../App.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Questionpage() {
  // Track which rings have been thrown
  const [thrownGreenRings, setThrownGreenRings] = useState([]);
  const [thrownRedRings, setThrownRedRings] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const handleThrowRings = (selected) => {
    // If answer changes, reset everything
    if (isCorrect !== selected) {
      setThrownGreenRings([]);
      setThrownRedRings([]);
      setIsCorrect(selected);
      setClickCount(0);
    }
    
    // Increment click count (max 3 clicks per choice)
    const newClickCount = Math.min(clickCount + 1, 3);
    setClickCount(newClickCount);
    
    // Throw one ring per click based on current click count
    if (selected === true) {
      setThrownGreenRings(Array.from({ length: newClickCount }, (_, i) => i));
    } else {
      setThrownRedRings(Array.from({ length: newClickCount }, (_, i) => i));
    }
  };

  return (
    <div className="ques-container">
      <img src="/plant1.png" alt="plant" className="plant1-button" />
      <img src="/plant1.png" alt="plant" className="plant2-button" />
      
      <img
        src="/true.png"
        alt="True"
        className="true-button"
        onClick={() => handleThrowRings(true)}
      />
      <img
        src="/false.png"
        alt="False"
        className="false-button"
        onClick={() => handleThrowRings(false)}
      />
      
      {/* Green Rings (Stationary or Animated) */}
      {[0, 1, 2].map((index) => (
        thrownGreenRings.includes(index) ? (
          <motion.img
            key={`green-ring-${index}`}
            src={`/gr${index + 1}.png`}
            alt="Ring"
            className={`gr${index + 1}-button`}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{
              x: 0,
              y: -180, // Reduced height so rings don't go too high
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          !thrownGreenRings.includes(index) && (
            <img 
              key={`green-ring-static-${index}`} 
              src={`/gr${index + 1}.png`} 
              alt="Ring" 
              className={`gr${index + 1}-button`} 
              style={{ 
                opacity: isCorrect === true && thrownGreenRings.includes(index) ? 0 : 1 
              }} 
            />
          )
        )
      ))}
      
      {/* Red Rings (Stationary or Animated) */}
      {[0, 1, 2].map((index) => (
        thrownRedRings.includes(index) ? (
          <motion.img
            key={`red-ring-${index}`}
            src={`/rr${index + 1}.png`}
            alt="Ring"
            className={`rr${index + 1}-button`}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{
              x: 0,
              y: -180, // Reduced height so rings don't go too high
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          !thrownRedRings.includes(index) && (
            <img 
              key={`red-ring-static-${index}`} 
              src={`/rr${index + 1}.png`} 
              alt="Ring" 
              className={`rr${index + 1}-button`} 
              style={{ 
                opacity: isCorrect === false && thrownRedRings.includes(index) ? 0 : 1 
              }} 
            />
          )
        )
      ))}
    </div>
  );
}

export default Questionpage;