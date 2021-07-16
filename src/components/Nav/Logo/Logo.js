import React from "react";
import { useHistory } from "react-router-dom";
import "./Logo.css";

function Logo() {
  const history = useHistory();

  return (
    <div className="Logo">
      <img
        onClick={() => history.push("/")}
        src="/images/logo.png"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
