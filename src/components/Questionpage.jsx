import "../App.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Questionpage() {
  const [thrownGreenRings, setThrownGreenRings] = useState([]);
  const [thrownRedRings, setThrownRedRings] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentRingIndex, setCurrentRingIndex] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const correctAnswer = true;

  // Function to play sound
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleThrowRings = (selected) => {
    playSound("/gameSound.wav"); // Play sound for each throw

    if (isCorrect !== selected) {
      setThrownGreenRings([]);
      setThrownRedRings([]);
      setIsCorrect(selected);
      setCurrentRingIndex(0);
      setShowFeedback(false);

      if (selected === correctAnswer) {
        setFeedbackMessage("Great job! You got it right!");
      } else {
        setFeedbackMessage("Not quite. Try again!");
      }

      setTimeout(() => {
        if (selected === true) {
          setThrownGreenRings([0]);
        } else {
          setThrownRedRings([0]);
        }
        setShowFeedback(true);
      }, 50);

      return;
    }

    if (currentRingIndex >= 2) {
      setThrownGreenRings([]);
      setThrownRedRings([]);
      setCurrentRingIndex(0);
      setShowFeedback(false);

      setTimeout(() => {
        if (selected === true) {
          setThrownGreenRings([0]);
        } else {
          setThrownRedRings([0]);
        }
        setShowFeedback(true);
      }, 50);

      return;
    }

    const nextRingIndex = currentRingIndex + 1;
    setCurrentRingIndex(nextRingIndex);

    if (selected === true) {
      setThrownGreenRings((prev) => [...prev, nextRingIndex]);
    } else {
      setThrownRedRings((prev) => [...prev, nextRingIndex]);
    }
  };

  // Effect to check when all rings are thrown
  useEffect(() => {
    if (thrownGreenRings.length === 3) {
      playSound("/trueSound.wav"); // Play correct answer sound
    } else if (thrownRedRings.length === 3) {
      playSound("/falseSound.wav"); // Play incorrect answer sound
    }
  }, [thrownGreenRings, thrownRedRings]);

  return (
    <div className="ques-container">
      <img src="/plant1.png" alt="plant" className="plant1-button" />
      <img src="/plant1.png" alt="plant" className="plant2-button" />

      {showFeedback && (
        <motion.div
          className="feedback-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "10%",
            left: "42%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            borderRadius: "20px",
            backgroundColor:
              isCorrect === correctAnswer ? "rgba(46, 204, 113, 0.9)" : "rgba(231, 76, 60, 0.9)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            zIndex: 100,
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {feedbackMessage}
        </motion.div>
      )}

      <img src="/true.png" alt="True" className="true-button" onClick={() => handleThrowRings(true)} />
      <img src="/false.png" alt="False" className="false-button" onClick={() => handleThrowRings(false)} />

      {/* Green Rings Animation */}
      {[0, 1, 2].map((index) =>
        thrownGreenRings.includes(index) ? (
          <motion.img
            key={`green-ring-${index}`}
            src={`/gr${index + 1}.png`}
            alt="Ring"
            className={`gr${index + 1}-button`}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{
              y: [-50, -250, -180], // Move higher (-250px) and settle at middle (-180px)
              opacity: 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ) : (
          <img
            key={`green-ring-static-${index}`}
            src={`/gr${index + 1}.png`}
            alt="Ring"
            className={`gr${index + 1}-button`}
            style={{
              opacity: thrownGreenRings.includes(index) ? 0 : 1,
            }}
          />
        )
      )}

      {/* Red Rings Animation */}
      {[0, 1, 2].map((index) =>
        thrownRedRings.includes(index) ? (
          <motion.img
            key={`red-ring-${index}`}
            src={`/rr${index + 1}.png`}
            alt="Ring"
            className={`rr${index + 1}-button`}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{
              y: [-50, -250, -180], // Move higher (-250px) and settle at middle (-180px)
              opacity: 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ) : (
          <img
            key={`red-ring-static-${index}`}
            src={`/rr${index + 1}.png`}
            alt="Ring"
            className={`rr${index + 1}-button`}
            style={{
              opacity: thrownRedRings.includes(index) ? 0 : 1,
            }}
          />
        )
      )}
    </div>
  );
}

export default Questionpage;
