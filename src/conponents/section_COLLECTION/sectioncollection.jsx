import GallerySlider from "../component_GALLERY/gallery";
import "./sectioncollection.scss";

const SectionCollection = () => {
  return (
    <section id="collection" className="section-collection">
      <div className="title">
        <span>
          <span className="curly-letters">C</span>ollection
        </span>
      </div>
      {window.innerWidth <= 425 ? (
        <>
          <GallerySlider />
          <button className="signup-button">sign up now</button>
        </>
      ) : (
        <div className="collection-image">
          <button className="signup-button">sign up now</button>
        </div>
      )}
    </section>
  );
};

export default SectionCollection;
