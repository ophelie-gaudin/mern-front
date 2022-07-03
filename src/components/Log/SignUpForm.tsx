import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors((prevErrors) => ({
      ...prevErrors,
      controlPassword: "",
      terms: "",
    }));

    if (password !== controlPassword || !isTermsChecked) {
      if (password !== controlPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          controlPassword: "Les mots de passe doivent être identiques.",
        }));
      }

      if (!isTermsChecked) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          terms: "Coche la case pour accepter les conditions générales.",
        }));
      }
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}user/register`,
          {
            pseudo,
            email,
            password,
          },
          { withCredentials: true }
        )
        .then(function (res) {
          console.log(res);

          navigate("/");
        })
        .catch(function (error) {
          console.log("Register error: ", error);

          setErrors((prevErrors) => ({ ...prevErrors, error }));
        });
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
      <div className="password error">{errors.password}</div>
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
