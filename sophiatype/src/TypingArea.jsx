import React from "react";
import { COLORS } from "./colors.js"
const TypingArea = ({
    typingText,
    inpFieldValue,
    timeLeft,
    mistakes,
    WPM, 
    initTyping,
    handleKeyDown,
    resetGame,
}) => {
    return (
        <div className="section">
      <div className="section1">
        <p id="paragraph">{typingText}</p>
      </div>
      <div className="section2">
        <ul className="resultDetails">
          <li className="time">
            <p>Time Left:</p>
            <span>
              <b>{timeLeft}</b>s
            </span>
          </li>
          <li className="mistake">
            <p>Mistakes:</p>
            <span>{mistakes}</span>
          </li>
          <li className="wpm">
            <p>WPM:</p>
            <span>{WPM}</span>
          </li>
        </ul>
        <button onClick={resetGame} className="btn">
          Try Again
        </button>
      </div>
    </div>
    );
};

export default TypingArea;