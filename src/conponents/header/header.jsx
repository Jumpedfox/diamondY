import "./header.scss";
import React, { useEffect, useState } from "react";
import MobileMenu from "../component_MOBILE_MENU/mobilemenu";

const Header = () => {
  const [small, setSmall] = useState(false);
  const [smallMobile, setSmallMobile] = useState(false);
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);

  const handlePhoneClick = () => {
    navigator.clipboard.writeText("467547998");
    setTooltipStatus(true);
    setTimeout(() => {
      setTooltipStatus(false);
    }, 3000);
  };

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
      className={`${small ? "small" : ""}${
        smallMobile ? "small smallMobile" : ""
      }`}
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
          <a className="number" href="tel:467547998">467 547 998</a>
        </>
      )}
      {window.innerWidth <= 425 && (
        <>
          {tooltipStatus ? (
            <span className="tooltip">copied</span>
          ) : (
            <span className="number" onClick={handlePhoneClick}></span>
          )}
          <button onClick={() => setMobileMenuIsActive(true)} />
          {mobileMenuIsActive && (
            <MobileMenu
              mobileMenuIsActive={mobileMenuIsActive}
              setMobileMenuIsActive={setMobileMenuIsActive}
            />
          )}
        </>
      )}
    </header>
  );
};

export default Header;
