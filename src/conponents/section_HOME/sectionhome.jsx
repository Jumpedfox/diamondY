import "./sectionhome.scss";

const SectionHome = ({setSignupMOdalIsOpen}) => {
  return (
    <section id="home" className="section-home">
      <div className="decoration-1" />
      <span>wedding dresses collection 2023</span>
      <button className="signup-button" onClick={setSignupMOdalIsOpen}>sign up now</button>
    </section>
  );
};

export default SectionHome;
