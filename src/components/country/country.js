import React, { useState, useEffect } from "react";
import wordStyles from "./country.module.scss";
import { Link, useNavigate } from "react-router-dom";

function Country() {
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
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Faso",
    "Cambodia",
    "Burundi",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "Indonesia",
    "India",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
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
              <h2>Please Select Country</h2>
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
                10 Country
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
                15 Country
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
                20 Country
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
                25 Country
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
                30 Country
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
                    <span>Corrected Spelling: </span>
                    <span>{correct}</span>
                  </p>
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    <span>Wrong Spelling: </span>
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
            <h3>Country Typing Result</h3>
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
                <span>Correct Spelling: </span>
                <span>{correct}</span>
              </p>
              <p style={{ color: "red", fontWeight: "bold" }}>
                <span>Wrong Spelling: </span>
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

export default Country;
