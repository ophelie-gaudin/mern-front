import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const passwordError = document.getElementById(".error.pseudo");
    const pseudoError = document.getElementById(".error.pseudo");
    const emailError = document.getElementById(".error.email");
    const ConirmePasswPassordError = document.getElementById(".error.pseudo");
    const termsError = document.getElementById(".terms.error");
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
      <div className="controlPassword error"></div>
      <br />
      <br />
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">
        J'accepte les{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          const passwordError = document.getElementById(".error.pseudo");
          conditions générales.
        </a>{" "}
        <div className="terms error"></div>
      </label>
      <input type="submit" value="Valider mon inscription" />
    </form>
  );
};

export default SignUpForm;
