import React from "react";
import { randomElementSelector } from "../../helper/randomSelector";
import { TestContainer } from "../TestContainer/TestContainer";
import { paragraphsArray} from "./../../data/source";
import { testDetailsCalculator } from "../../helper/testDetailsCalculator";
import "./App.css";
const defaultState = {
  timerStarted: false,
  timerValue: 60,
  userInput: "",
  test: '',
  // selectedParagraph: randomElementSelector(eassyPara),
  selectedParagraph:paragraphsArray.paragraph[0].Para,
  detailsContainer: {
    words: 0,
    characters: 0,
    mistakes: 0,
    wordWeight:0
  },
};

class App extends React.Component {
  constructor() {
    super();

    this.state = defaultState;
  }
  changeTest = (inputtest) => {
    console.log("input test", inputtest);
    this.setState({ selectedParagraph: inputtest });
  //  console.log("test", this.state.test)
  };
  handleStart = () => {
    if (!this.state.timerStarted) this.startTimer();
    
  };
  handleOnType = (inputValue) => {
    // console.log("Input Value", inputValue);
    this.setState({ userInput: inputValue });
    // if (!this.state.timerStarted) this.startTimer();
    if (!this.handleStart) this.startTimer();
    this.state.detailsContainer = testDetailsCalculator(
      this.state.selectedParagraph,
      this.state.userInput
    );
    
  };
  triggerTryAgain = () => this.setState(defaultState);

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timerValue > 0) {
        this.setState({ timerValue: this.state.timerValue - 1 });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  render() {
   
    return (
      <div className="app-container">
        <h1 className="main-heading">Speedy Type</h1>
        <div className="test-container-main">
          <TestContainer
            handleOnType={this.handleOnType}
            timerStarted={this.state.timerStarted}
            timerValue={this.state.timerValue}
            triggerTryAgain={this.triggerTryAgain}
            selectedParagraph={this.state.selectedParagraph}
            words={this.state.detailsContainer.words}
            characters={this.state.detailsContainer.characters}
            mistakes={this.state.detailsContainer.mistakes}
            userInput={this.state.userInput}
            handlestart={this.handleStart}
            changeTest={this.changeTest}
            wordWeight={this.state.detailsContainer.wordWeight}
          />
        </div>
      </div>
    );
  }
}

export default App;
