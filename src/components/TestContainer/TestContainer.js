import { TypingChallengeContainer } from "../TypingChallengeContainer/TypingChallengeContainer";
import { TryAgain } from "./../TryAgain/TryAgain";
import "./TestContainer.css";

export const TestContainer = ({ 
    handleOnType, 
    handlestart,
    timerStarted, 
    timerValue,
    triggerTryAgain,
    selectedParagraph ,
    words,
    characters,
    mistakes,
    userInput,
    changeTest,
    wordWeight

}) => {
 // temporary var (Will be replaced while building the app)

  return (
    <div className="test-container">
      {/* Show the try again or start screen */}
      {
      (timerValue >0) ? (
        <div className="typing-challenge-cont">
          <TypingChallengeContainer 
          timerValue={timerValue}
          timerStarted={timerStarted}
          handlestart={handlestart}
          handleOnType={handleOnType} 
          selectedParagraph={selectedParagraph}
          words={words}
          characters={characters}
          mistakes={mistakes}
          userInput={userInput}
          changeTest={changeTest}
          wordWeight={wordWeight}
          
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain 
          triggerTryAgain={triggerTryAgain}
          words={words}
          characters={characters}
          mistakes={mistakes}
          />
        </div>
      )}
    </div>
  );
};
