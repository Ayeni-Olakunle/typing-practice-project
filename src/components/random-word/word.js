import React, { useState, useEffect } from "react";
import wordStyles from "./word.module.scss";
import { Link, useNavigate } from "react-router-dom";

function Word() {
  const [screen, setScreen] = useState("");
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [toScreen, setToScreen] = useState(false);
  const [counter, setCounter] = useState(null);
  const [minute, setMinute] = useState(0);
  const [start, setStart] = useState(true);
  const [accurate, setAccurate] = useState(null);
  const [speed, setSpeed] = useState(null);

  const navigate = useNavigate();

  const words = [
    "Milkman",
    "Brought",
    "Donuts",
    "Cheese",
    "Along",
    "With",
    "Milk",
    "Bottle",
    "Whiskey",
    "Houses",
    "Antifungal",
    "Antifungals",
    "Bifunctional",
    "Cofunction",
    "Cofunctions",
    "Robin",
    "Singh",
    "Never",
    "Forget",
    "Empty",
    "Your",
    "Vacuum",
    "Bags",
    "Practice",
    "Makes",
    "Perfect",
    "Statically",
    "Typed",
    "Dynamically",
    "Typed",
    "Language",
    "Programming",
    "Career",
    "Candidates",
    "Need",
    "Crack",
    "The",
    "Interview",
    "Netscape",
    "Company",
    "That",
    "Developed",
    "Global",
    "Variables",
    "Available",
    "Throughout",
    "Length",
    "Code",
    "It",
    "Has",
    "Scope",
    "Keyword",
  ];

  const totalWords = (currentWord) => {
    setTotalQuestion(currentWord);
  };

  const generate = () => {
    let ran = Math.floor(Math.random() * words.length);
    setScreen(words[ran]);
    if (input === "" && screen === "") {
      setCorrect(0);
      setInput("");
    } else if (input.toLocaleLowerCase() !== screen.toLocaleLowerCase()) {
      setWrong(wrong + 1);
      console.log(wrong);
      setInput("");
    } else if (
      input !== "" &&
      screen !== "" &&
      input.toLocaleLowerCase() === screen.toLocaleLowerCase()
    ) {
      setCorrect(correct + 1);
      setInput("");
    } else {
      setWrong(wrong + 1);
      setInput("");
    }
  };

  useEffect(() => {
    const accuracy = () => {
      if (totalQuestion === 10) {
        setAccurate(correct * 10 + "%");
      } else if (totalQuestion === 15) {
        setAccurate(correct * 6.66 + "%");
      } else if (totalQuestion === 20) {
        setAccurate(correct * 5 + "%");
      } else if (totalQuestion === 25) {
        setAccurate(correct * 4 + "%");
      } else if (totalQuestion === 30) {
        setAccurate(correct * 3.3 + "%");
      }
    };
    accuracy();
    const speedFast = () => {
      if (counter > 50) {
        setSpeed(90 + "%");
      } else if (counter > 40) {
        setSpeed(75 + "%");
      } else if (counter > 30) {
        setSpeed(65 + "%");
      } else if (counter > 20) {
        setSpeed(45 + "%");
      } else if (counter > 10) {
        setSpeed(25 + "%");
      } else if (counter > 0) {
        setSpeed(15 + "%");
      }
    };
    speedFast();
    if (start) {
      const time = setInterval(function () {
        setCounter(counter - 1);
        if (counter === 0) {
          setStart(false);
          setCounter(0);
        }
      }, 1000);
      return () => {
        clearInterval(time);
      };
    } else {
      console.log("Not Started");
    }
  }, [counter]);

  return (
    <div className={wordStyles.holdWord}>
      <div className={wordStyles.holdWord2}>
        <div
          className={
            (totalQuestion !== 0 &&
              correct + wrong !== 0 &&
              totalQuestion === correct + wrong) ||
            minute === counter
              ? wordStyles.result2
              : wordStyles.result
          }
        >
          <div className={toScreen ? wordStyles.noDisplay : wordStyles.display}>
            <div className={wordStyles.holdButton}>
              <h2>Please Select Word</h2>
              <button
                className={wordStyles.butin}
                onClick={() => {
                  totalWords(10);
                  setToScreen(true);
                  generate();
                  setStart(true);
                  setCounter(60);
                }}
              >
                10 words
              </button>
              <button
                className={wordStyles.butin}
                onClick={() => {
                  totalWords(15);
                  setToScreen(true);
                  generate();
                  setCounter(60);
                }}
              >
                15 words
              </button>
              <button
                className={wordStyles.butin}
                onClick={() => {
                  totalWords(20);
                  setToScreen(true);
                  generate();
                  setCounter(60);
                }}
              >
                20 words
              </button>
              <button
                className={wordStyles.butin}
                onClick={() => {
                  totalWords(25);
                  setToScreen(true);
                  generate();
                  setCounter(60);
                }}
              >
                25 words
              </button>
              <button
                className={wordStyles.butin}
                onClick={() => {
                  totalWords(30);
                  setToScreen(true);
                  generate();
                  setCounter(60);
                }}
              >
                30 words
              </button>
            </div>
          </div>

          <div className={toScreen ? wordStyles.display : wordStyles.noDisplay}>
            <div className={wordStyles.holdText}>
              <h3>Random Words Typing Practice</h3>
              <div
                style={{
                  width: "100%",
                }}
              >
                <div className={wordStyles.tracking}>
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    onClick={generate}
                  >
                    <span>Total words:</span>
                    <span>{totalQuestion}</span>
                  </p>
                  <p
                    style={{ color: "green", fontWeight: "bold" }}
                    onClick={() => {
                      setStart(true);
                    }}
                  >
                    <span>Corrected words: </span>
                    <span>{correct}</span>
                  </p>
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    <span>Wrong words: </span>
                    <span>{wrong}</span>
                  </p>
                  <p style={{ color: "orange", fontWeight: "bold" }}>
                    <span>Time: </span>
                    <span>{`${minute}:${counter}`}</span>
                  </p>
                </div>
                <button
                  className={wordStyles.butin}
                  onClick={() => {
                    const exit = window.confirm("Do you want to home page?");
                    if (exit) {
                      navigate("/");
                    }
                  }}
                >
                  Cancel
                </button>
                <div>
                  <div className={wordStyles.screen}>
                    <div
                      direction="left"
                      width="60%"
                      className={wordStyles.textItself}
                    >
                      {screen}
                    </div>
                    <div
                      style={{
                        backgroundColor: "transparent",
                        height: "50vh",
                        width: "48%",
                        position: "absolute",
                      }}
                    ></div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Type here..."
                      className={wordStyles.input}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          generate();
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (totalQuestion !== 0 &&
              correct + wrong !== 0 &&
              totalQuestion === correct + wrong) ||
            counter === 0
              ? wordStyles.result
              : wordStyles.result2
          }
        >
          <div>
            <h3>Random Words Typing Result</h3>
            <div className={wordStyles.holdTop}>
              <p>Thanks For Trying Out Our Typing Practice</p>
              <Link to={"/"} className={wordStyles.linkHoldButton}>
                <button className={wordStyles.butin}>Home</button>
              </Link>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <p>
                <span>Total words:</span>
                <span>{totalQuestion}</span>
              </p>
              <p style={{ color: "green", fontWeight: "bold" }}>
                <span>Correct words: </span>
                <span>{correct}</span>
              </p>
              <p style={{ color: "red", fontWeight: "bold" }}>
                <span>Wrong words: </span>
                <span>{wrong}</span>
              </p>
              <p style={{ color: "lightblue", fontWeight: "bold" }}>
                <span>Speed: </span>
                <span>{speed}</span>
              </p>
              <p style={{ color: "orange", fontWeight: "bold" }}>
                <span>Accuracy: </span>
                <span>{accurate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Word;
