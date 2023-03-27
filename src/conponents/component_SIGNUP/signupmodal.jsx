import { useState } from "react";
import "./signupmodal.scss";

const SignupModal = ({
  closeSignupModal,
  closeModalAnimation,
  setCloseModalAnimation,
}) => {
  const [closeModal, setClosseModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const activateButtonAnimation = () => {
    setClosseModal(true);
    setTimeout(() => {
      setClosseModal(false);
    }, 3000);
    setTimeout(() => {
      closeSignupModal();
      setCloseModalAnimation(true);
      setTimeout(() => {
        setCloseModalAnimation(false);
      }, 1500);
    }, 2000);
  };

  const showSecondModalAction = () => {
    setShowSecondModal(true);
  };

  const closeModalWithAnimation = () => {
    setCloseModalAnimation(true);
    setTimeout(() => {
      closeSignupModal();
      setTimeout(() => {
        setCloseModalAnimation(false);
      }, 1500);
    }, 500);
  };

  return (
    <div
      className={`signup-modal-wrapper ${
        closeModalAnimation ? "close-modal" : ""
      }`}
    >
      {!showSecondModal ? (
        <div className="signup-modal">
          <button className="close-button" onClick={closeModalWithAnimation} />
          <span>
            sign up
            <br /> to try a dress
          </span>
          <ul>
            <li>
              <input type="text" placeholder="write your name" />
            </li>
            <li>
              <input type="number" placeholder="your phone number" />
            </li>
            <li>
              <input type="email" placeholder="your e-mail address" />
            </li>
            <li>
              <input type="text" placeholder="select fitting date " />
            </li>
          </ul>
          <button onClick={showSecondModalAction} className="animated-button">
            let's go
          </button>
        </div>
      ) : (
        <div className="signup-modal thankyou">
          <button className="close-button" onClick={closeModalWithAnimation} />
          <span>THANK YOU!</span>
          <span>
            Your request has been accepted. During the day, our manager will
            contact you.
          </span>
          <div className="button-wrapper">
            <button
              className={`${closeModal ? "button-checked" : ""}`}
              onClick={activateButtonAnimation}
            >
              {!closeModal ? "COME BACK" : <div />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupModal;
