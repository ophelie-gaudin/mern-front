import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props: { signup: any; signin: any }) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();

    if ((e.target as HTMLLIElement).id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if ((e.target as HTMLLIElement).id === "login") {
      setSignInModal(true);
      setSignUpModal(false);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={` ${signUpModal ? "active-btn" : null}`}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={` ${signInModal ? "active-btn" : null}`}
          >
            Se connecter
          </li>
        </ul>

        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
