import "../App.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Questionpage() {
  // Track which rings have been thrown
  const [thrownGreenRings, setThrownGreenRings] = useState([]);
  const [thrownRedRings, setThrownRedRings] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  
  // Track the current ring index being thrown
  const [currentRingIndex, setCurrentRingIndex] = useState(0);

  const handleThrowRings = (selected) => {
    // If answer changes, reset everything
    if (isCorrect !== selected) {
      setThrownGreenRings([]);
      setThrownRedRings([]);
      setIsCorrect(selected);
      setCurrentRingIndex(0);
      
      // Add first ring with a slight delay to ensure clean reset
      setTimeout(() => {
        if (selected === true) {
          setThrownGreenRings([0]);
        } else {
          setThrownRedRings([0]);
        }
      }, 50);
      
      return;
    }
    
    // If we've already thrown all 3 rings, reset and start over
    if (currentRingIndex >= 2) {
      setThrownGreenRings([]);
      setThrownRedRings([]);
      setCurrentRingIndex(0);
      
      // Add first ring with a slight delay
      setTimeout(() => {
        if (selected === true) {
          setThrownGreenRings([0]);
        } else {
          setThrownRedRings([0]);
        }
      }, 50);
      
      return;
    }
    
    // Add the next ring
    const nextRingIndex = currentRingIndex + 1;
    setCurrentRingIndex(nextRingIndex);
    
    if (selected === true) {
      setThrownGreenRings(prev => [...prev, nextRingIndex]);
    } else {
      setThrownRedRings(prev => [...prev, nextRingIndex]);
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
              y: -180,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <img 
            key={`green-ring-static-${index}`} 
            src={`/gr${index + 1}.png`} 
            alt="Ring" 
            className={`gr${index + 1}-button`} 
            style={{ 
              opacity: thrownGreenRings.includes(index) ? 0 : 1 
            }} 
          />
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
              y: -180,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <img 
            key={`red-ring-static-${index}`} 
            src={`/rr${index + 1}.png`} 
            alt="Ring" 
            className={`rr${index + 1}-button`} 
            style={{ 
              opacity: thrownRedRings.includes(index) ? 0 : 1 
            }} 
          />
        )
      ))}
    </div>
  );
}

export default Questionpage;