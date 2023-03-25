import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import gallery1 from "../../images/Rectangle1.png";
import gallery2 from "../../images/Rectangle2.png";
import gallery3 from "../../images/Rectangle3.png";
import gallery4 from "../../images/Rectangle4.png";
import gallery5 from "../../images/Rectangle5.png";
import gallery6 from "../../images/Rectangle6.png";
import "./gallery.scss";

const GallerySlider = () => {
  return (
    <>
      <Slide autoplay={false} arrows={false} indicators={true}>
        <div
          style={{
            background: `url(${gallery1})`,
            width: "190px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "212px 0px",
            paddingRight: "90px",
          }}
        ></div>
        <div
          style={{
            background: `url(${gallery2})`,
            width: "190px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "212px 0",
            paddingRight: "90px",
          }}
        ></div>
        <div
          style={{
            background: `url(${gallery3})`,
            width: "190px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "212px 0",
            paddingRight: "90px",
          }}
        ></div>
        <div
          style={{
            background: `url(${gallery4})`,
            width: "190px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "212px 0",
            paddingRight: "90px",
          }}
        ></div>
        <div
          style={{
            background: `url(${gallery5})`,
            width: "190px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "212px 0",
            paddingRight: "90px",
          }}
        ></div>
        <div
          style={{
            background: `url(${gallery6})`,
            width: "190px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "212px 0",
            paddingRight: "90px",
          }}
        ></div>
      </Slide>
    </>
  );
};

export default GallerySlider;
