import React, { useRef, useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [isTermsChecked, setTerms] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    controlPassword: "",
    email: "",
    terms: "",
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const terms = document.getElementById(".terms") as HTMLInputElement;
    // const pseudoError = document.querySelector(".error.pseudo");
    // const emailError = document.querySelector(".error.email");
    // const passwordError = document.querySelector(".error.password");
    // const controlPasswordError = document.querySelector(
    //   ".error.control-password"
    // );
    // const termsError = document.querySelector(".terms.error");

    if (password !== controlPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        controlPassword: "Les mots de passe doivent être identiques.",
      }));
    }

    if (!isTermsChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        terms: "signe ca ducon !",
      }));
    }
  };

  return (
    <form action="" onSubmit={handleRegister} id="sign-up-form">
      <label htmlFor="pseudo">Pseudo </label>
      <br />
      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <br />
      <div className="pseudo error"></div>
      <br />
      <br />
      <label htmlFor="email">Email </label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <div className="email error"></div>
      <br />
      <br />
      <label htmlFor="password">Mot de passe </label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <div className="password error"></div>
      <br />
      <br />
      <label htmlFor="controlPassword">Vérification du mot de passe </label>
      <br />
      <input
        type="password"
        name="controlPassword"
        id="controlPassword"
        onChange={(e) => setControlPassword(e.target.value)}
        value={controlPassword}
      />
      <br />
      <div className="control-password error">{errors.controlPassword}</div>
      <br />
      <br />
      <input
        type="checkbox"
        id="terms"
        onChange={(e) => setTerms(e.target.checked)}
      />
      <label htmlFor="terms">
        J'accepte les{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          conditions générales.
        </a>{" "}
        <div className="terms error">{errors.terms}</div>
      </label>
      <input type="submit" value="Valider mon inscription" />
    </form>
  );
};

export default SignUpForm;
