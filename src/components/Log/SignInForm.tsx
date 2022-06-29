import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${process.env.REACT_APP_API_URL}user/login`);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then(function (res) {
        console.log(res);
        console.log(res.data);

        navigate("/");
      })
      .catch(function (error) {
        console.log("JWT error: ", error);

        const errorsContent = error.response.data.errors;

        if (errorsContent) {
          emailError!.innerHTML = errorsContent.email;
          passwordError!.innerHTML = errorsContent.password;
        }
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-in-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <br />
      <div className="email error"></div>
      <br />
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <br />
      <div className="password error"></div>
      <br />
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
