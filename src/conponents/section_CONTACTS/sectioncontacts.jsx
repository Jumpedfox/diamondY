import "./sectioncontacts.scss";
import insta from "../../images/openmoji_instagram.png";
import facebook from "../../images/ph_facebook-logo-thin.png";
import telegram from "../../images/uit_telegram-alt.png";

const SectionContacts = () => {
  return (
    <section id="contacts" className="section-contacts">
      <div className="decoration-5" />
      <div className="decoration-6" />
      <div className="title">
        <span>
          <span className="curly-letters">C</span>ontacts
        </span>
      </div>
      <ul>
        <li>
          <span>Adress</span>
          <span>nalepkova st. 887/23</span>
        </li>
        <li>
          <span>Tel</span>
          <span>467 547 998</span>
        </li>
        <li>
          <span>Social network</span>
          <ul>
            <li>
              <img src={`${insta}`} alt="insta"/>
            </li>
            <li>
            <img src={`${facebook}`} alt="facebook"/>
            </li>
            <li>
            <img src={`${telegram}`} alt="telegram"/>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SectionContacts;
