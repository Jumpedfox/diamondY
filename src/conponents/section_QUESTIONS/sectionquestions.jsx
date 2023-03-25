import "./sectionquestions.scss";

const SectionQuestions = () => {
  return (
    <section id="questions" className="section-questions">
      <div className="decoration-3" />
      <div className="decoration-4" />
      <div className="title">
        <span>
          <span className="curly-letters">Q</span>uestions
        </span>
      </div>
      <ul>
        <li>
          <span>
            Is it possible to have the dress made according to my measurements?
          </span>
        </li>
        <li>
          <span>
            Yes, sure. A dress must be perfect for every bride. we pay great
            attention to it.
          </span>
        </li>
        <li>
          <span>
            I am very short. Do you have a dress model to emphasize my dignity?
          </span>
        </li>
        <li>
          <span>
            Yes, that's what we're working for. It is important to be the most
            beautiful.
          </span>
        </li>
        <li>
          <span>What is the cost of the dress?</span>
        </li>
        <li>
          <span>
            Prices vary and are as individual as your wishes. we are waiting for
            you in the showroom and will be happy to pick up a dress for all
            your requests.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default SectionQuestions;
