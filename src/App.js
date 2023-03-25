import "./App.scss";
import Header from "./conponents/header/header";
import SectionAbout from "./conponents/section_ABOUT/sectionabout";
import SectionCollection from "./conponents/section_COLLECTION/sectioncollection";
import SectionContacts from "./conponents/section_CONTACTS/sectioncontacts";
import SectionHome from "./conponents/section_HOME/sectionhome";
import SectionQuestions from "./conponents/section_QUESTIONS/sectionquestions";

function App() {
  // header change animation
  // let header = document.querySelector("header");
  // document.addEventListener("scroll", function () {
  //   let scrollPos = window.pageYOffset;

  //   if (scrollPos > 100) {
  //     header.style.background = "url(./1234.png)";
  //     header.style.color = "white";
  //     header.style.top = "-30px";
  //   } else {
  //     header.style.background = "url(./123.png)";
  //     header.style.color = "rgba(186, 130, 105, 1)";
  //     header.style.top = "0";
  //   }
  // });

  return (
    <div className="App">
      <Header />
      <SectionHome />
      <SectionAbout />
      <SectionCollection />
      <SectionQuestions />
      <SectionContacts />
    </div>
  );
}

export default App;
