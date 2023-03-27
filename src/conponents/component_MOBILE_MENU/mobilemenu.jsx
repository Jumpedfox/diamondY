import "./mobilemenu.scss";

const MobileMenu = ({ setMobileMenuIsActive, mobileMenuIsActive }) => {
  return (
    <>
      <div
        className={`menu-mobile-wrapper ${
          mobileMenuIsActive ? "menu-mobile-active" : ""
        }`}
        onClick={() => setMobileMenuIsActive(false)}
      ></div>
      <nav
        className={`menu-mobile ${
          mobileMenuIsActive ? "menu-mobile-active" : ""
        }`}
      >
        <ul>
          <li className="about">
            <a href="#about" onClick={() => setMobileMenuIsActive(false)}>
              ABOUT
            </a>
          </li>
          <li className="collection">
            <a href="#collection" onClick={() => setMobileMenuIsActive(false)}>
              COLLECTION
            </a>
          </li>
          <li className="questions">
            <a href="#questions" onClick={() => setMobileMenuIsActive(false)}>
              QUESTIONS
            </a>
          </li>
          <li className="contacts">
            <a href="#contacts" onClick={() => setMobileMenuIsActive(false)}>
              CONTACTS
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
