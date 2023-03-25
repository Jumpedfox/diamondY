import "./header.scss";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [small, setSmall] = useState(false);
  const [smallMobile, setSmallMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 425) {
        window.addEventListener("scroll", () =>
          setSmallMobile(window.pageYOffset > 10)
        );
      } else {
        window.addEventListener("scroll", () =>
          setSmall(window.pageYOffset > 100)
        );
      }
    }
  }, []);

  return (
    <header
      className={`${small ? "small" : ""}${smallMobile ? "small smallMobile" : ""}`}
    >
      <a className="logo" href="#home"></a>
      {window.innerWidth > 425 && (
        <>
          <nav className="menu">
            <ul>
              <li className="about">
                <a href="#about">ABOUT</a>
              </li>
              <li className="collection">
                <a href="#collection">COLLECTION</a>
              </li>
              <li className="questions">
                <a href="#questions">QUESTIONS</a>
              </li>
              <li className="contacts">
                <a href="#contacts">CONTACTS</a>
              </li>
            </ul>
          </nav>
          <span className="number">467 547 998</span>
        </>
      )}
      {window.innerWidth <= 425 && (
        <>
          <span className="number"></span>
          <button></button>
        </>
      )}
    </header>
  );
};

export default Header;
