import Preview from "./Preview";
import "./TypingChallenge.css";

export const TypingChallenge = ({
  handleOnType,
  handlestart,
  timerValue,
  timerStarted,
  selectedParagraph,
  userInput

}) => {
//  console.log("selected paragraph",selectedParagraph)
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:{timerValue < 10 ? `0${timerValue}` : timerValue}
        </p>
        <p className="timer-info">
          {!timerStarted && "Click start to start the test"}
        </p>
        <button
          style={{ width: "100px" }}
          onClick={() =>handlestart()}
          className="bg-success text-white"
        >
          Start
        </button>
      </div>

      <div className="textarea-container">
        <div className="textarea-left ">
        <Preview selectedParagraph={selectedParagraph} userInput={userInput}/>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={(e) => handleOnType(e.target.value)}
            className="textarea"
            placeholder="Start type here "
          />
        </div>
      </div>
    </div>
  );
};
