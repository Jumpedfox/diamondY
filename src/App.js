import { useState } from "react";
import "./App.scss";
import SignupModal from "./conponents/component_SIGNUP/signupmodal";
import Header from "./conponents/header/header";
import SectionAbout from "./conponents/section_ABOUT/sectionabout";
import SectionCollection from "./conponents/section_COLLECTION/sectioncollection";
import SectionContacts from "./conponents/section_CONTACTS/sectioncontacts";
import SectionHome from "./conponents/section_HOME/sectionhome";
import SectionQuestions from "./conponents/section_QUESTIONS/sectionquestions";

function App() {
  const [signupModalIsOpen, setSignupMOdalIsOpen] = useState(false);
  const [closeModalAnimation, setCloseModalAnimation] = useState(false);

  const closeSignupModal = () => {
    setTimeout(() => {
      setSignupMOdalIsOpen(false);
    }, 1000);
  };

  return (
    <div className="App">
      {signupModalIsOpen && (
        <SignupModal
          closeSignupModal={closeSignupModal}
          closeModalAnimation={closeModalAnimation}
          setCloseModalAnimation={setCloseModalAnimation}
        />
      )}
      <Header />
      <SectionHome setSignupMOdalIsOpen={setSignupMOdalIsOpen} />
      <SectionAbout />
      <SectionCollection setSignupMOdalIsOpen={setSignupMOdalIsOpen} />
      <SectionQuestions />
      <SectionContacts />
    </div>
  );
}

export default App;
