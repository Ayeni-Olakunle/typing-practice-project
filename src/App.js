import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/index";
import Word from "./components/random-word/word";
import Country from "./components/country/country";
import Common from "./components/common-words/common";
import Custom from "./components/custom/custom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/random-word" element={<Word />} />
        <Route path="/country" element={<Country />} />
        <Route path="/common" element={<Common />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </div>
  );
}

export default App;
