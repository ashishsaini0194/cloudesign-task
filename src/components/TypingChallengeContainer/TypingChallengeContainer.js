import "./TypingChallengeContainer.css";
import { ChallengeDetailsCard } from "../ChallengeDetailsCard/ChallengeDetailsCard.js";
import { TypingChallenge } from "../TypingChallenge/TypingChallenge";

import { useState, useEffect } from "react";
import DropDownList from "../DropDownList";
export const TypingChallengeContainer = ({
  handleOnType,
  handlestart,
  timerValue,
  timerStarted,
  selectedParagraph,
  words,
  characters,
  mistakes,
  userInput,
  changeTest,
  wordWeight
}) => {
  const [score, setScore] = useState(words);
  const [lastScore, setLastScore] = useState("0");
  useEffect(() => {
    if (timerStarted) {
      setScore(words);
      localStorage.setItem("wpm", score);
    }
  }, [timerStarted, words]);
  useEffect(() => {
    const stroedScore = localStorage.getItem("wpm");

    if (stroedScore) setLastScore(stroedScore);
  }, []);

  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        {/* Words Typed */}
        <span style={{ width: "20%" }} className="bg-success text-white">
          <ChallengeDetailsCard cardName="Words" cardValue={words} />
        </span>

        {/* Characters Typed */}
        <span style={{ width: "20%" }} className="bg-dark text-white">
          <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        </span>
        {/* Mistakes */}
        <span style={{ width: "20%" }} className="bg-danger text-white">
          <ChallengeDetailsCard cardName="Mistakes" cardValue={mistakes} />
        </span>
        <span style={{ width: "20%" }} className="bg-primary text-white">
          <ChallengeDetailsCard cardName="Latest Score" cardValue={lastScore} />
        </span>
        <span style={{ width: "20%" }} className="bg-primary text-white">
          <ChallengeDetailsCard cardName="Word wt" cardValue={wordWeight} />
        </span>
        <span style={{ width: "20%" }} className="bg-secondary  text-white">
          <DropDownList changeTest={changeTest} />
        </span>
      </div>

      {/* Typing Challenge */}
      <div className="type-challenge-cont">
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timerStarted={timerStarted}
          timerValue={timerValue}
          handleOnType={handleOnType}
          handlestart={handlestart}
          userInput={userInput}
        />
      </div>
    </div>
  );
};
