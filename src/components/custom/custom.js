import React, { useState } from "react";
import customStyles from "./custom.module.scss";

function Custom() {
  const [holdLenght, setHoldLenght] = useState([]);
  const [input, setInput] = useState("");
  const [paste, setPaste] = useState("");
  const [num1, setNum1] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [yesNo, setYesNo] = useState(false);
  const spet = paste.split(" ");
  const checking = () => {
    setHoldLenght([...holdLenght, input]);
    setNum1(num1 + 1);
    setInput("");
    console.log(typeof holdLenght[num1]);
    console.log(typeof input);
    console.log(spet[num1] == input);
    console.log(typeof spet[num1]);
    if (spet[num1] == input) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
  };
  return (
    <div>
      <div className={customStyles.holdAll}>
        <div className={customStyles.holdAll2}>
          <div className={customStyles.holdText}>
            <div className={customStyles.holdDiman}>
              <textarea
                placeholder="Copy and Past your text here..."
                className={customStyles.copy}
                onChange={(e) => setPaste(e.target.value)}
                disabled={yesNo}
              ></textarea>
              <div className={yesNo ? customStyles.blockMan : ""}></div>
            </div>
            <button
              onClick={() => {
                setYesNo(true);
              }}
              className={
                yesNo ? customStyles.removeButin : customStyles.removeButin2
              }
            >
              Save text
            </button>
          </div>
          <div className={customStyles.holdProgress}>
            <h3>Custom Words Typing</h3>
            <div>
              <h4>Total Words</h4>
              <p>{spet.length}</p>
            </div>
            <div>
              <h4>Correct Words</h4>
              <p>{correct}</p>
            </div>
            <div>
              <h4>Wrong Words</h4>
              <p>{wrong}</p>
            </div>
          </div>
          <div className={customStyles.holdTyping}>
            <div className={customStyles.textarea}>
              <div className={customStyles.holdDisplay}>
                {holdLenght.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className={
                        item.toLocaleLowerCase().trim() ===
                        spet[index].toLocaleLowerCase().trim()
                          ? customStyles.yes
                          : customStyles.no
                      }
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <input
              type="text"
              placeholder="Type here..."
              className={customStyles.textarea2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (
                  e.key === "Space" ||
                  e.key === "Enter" ||
                  e.key === " " ||
                  e.code === "Space" ||
                  e.keyCode === 32
                ) {
                  checking();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
