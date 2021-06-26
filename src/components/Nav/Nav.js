import React, { useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const showNavbarHandler = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavbarHandler);
    return () => window.removeEventListener("scroll", showNavbarHandler);
  }, []);

  return (
    <div className={`Nav ${show && "Nav_Black"}`}>
      <nav>
        <Logo />
        <img
          className="logo__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </nav>
    </div>
  );
}

export default Nav;
