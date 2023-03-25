import "./sectionabout.scss";

const SectionAbout = () => {
  return (
    <section id="about" className="section-about">
      <div className="decoration-2" />
      <div className="title">
        <span>
          <span className="curly-letters">A</span>bout us
        </span>
      </div>
      <ul>
        <li>
          <span className="curly-letters">1500</span>
          <span>
            satisfied girls bought our dresses and were the happiest at their
            wedding
          </span>
        </li>
        <li>
          <span className="curly-letters">7</span>
          <span>We have been working and they trust us with their wedding</span>
        </li>
        <li>
          <span className="curly-letters">14</span>
          <span>collections we have successfully released</span>
        </li>
        <li>
          <span className="curly-letters">520</span>
          <span>more 520 photo reviews wrote to us</span>
        </li>
      </ul>
    </section>
  );
};

export default SectionAbout;
