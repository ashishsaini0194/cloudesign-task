import './TryAgain.css';

export const TryAgain = ({
    triggerTryAgain,
    words, 
    characters, 
    mistakes
}) => {
    return (
     
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                {/* Test Results */}
                <p><b>Characters:</b>{characters}</p>
                <p style={{color:"red"}}><b>Mistakes:</b>{mistakes}</p>
                <p style={{color:"green"}}><b>Speed:</b>{words} wpm</p>
                <p  style={{color:"blue"}}><b>Accuracy:</b>{(characters>0)?Math.floor((characters - mistakes) / characters * 100):0}</p>
            </div>

            <button onClick={() => {triggerTryAgain("Starting Againg...")}} className="start-again-btn">
                Start Again
            </button>
        </div>
    )
}