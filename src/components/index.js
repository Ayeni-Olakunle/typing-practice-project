import React from "react";
import { Link } from "react-router-dom";
import indexStyles from "./index.module.scss";

const Index = () => {
  return (
    <div className={indexStyles.holdLanding}>
      <h3>Please Select Typing Practice</h3>
      <div className={indexStyles.holdButton}>
        <Link to={"/random-word"} className={indexStyles.linkHoldButton}>
          <button className={indexStyles.butin}>Random Words</button>
        </Link>
        <Link to={"/common"} className={indexStyles.linkHoldButton}>
          <button className={indexStyles.butin}>Common Words</button>
        </Link>
        <Link to={"/country"} className={indexStyles.linkHoldButton}>
          <button className={indexStyles.butin}>Country</button>
        </Link>
        <Link to={"/random-word"} className={indexStyles.linkHoldButton}>
          <button className={indexStyles.butin}>Story</button>
        </Link>
        <Link to={"/custom"} className={indexStyles.linkHoldButton}>
          <button className={indexStyles.butin}>Custom</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
