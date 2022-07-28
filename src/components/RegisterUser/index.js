import React from "react";
import { useState } from "react";

import "./index.css";

import BootStrapSlider from "../BootStrapSlider";

function LoginForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState({ showSubmitError: false, errorMsg: "" });

  const containsUpperCase = (string) => {
    for (let char of string) {
      if (char === char.toUpperCase()) {
        return true;
      }
    }
    return false;
  };
  const containsSpecialCharacter = (string) => {
    let specialCharacterArray = [
      ",",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "=",
      "_",
      "+",
      "`",
      "~",
    ];
    for (let char of string) {
      if (specialCharacterArray.includes(char)) {
        return true;
      }
    }
    return false;
  };
  const checkPassword = () => {
    if (password.length <= 10) {
      setError({
        showSubmitError: true,
        errorMsg: "Password Length not greater than 10 characters",
      });
    } else if (!containsUpperCase(password)) {
      setError({
        showSubmitError: true,
        errorMsg: "Password does not contain any Capital Letters",
      });
    } else if (!containsSpecialCharacter(password)) {
      setError({
        showSubmitError: true,
        errorMsg: "Password does not contain any Special Characters",
      });
    } else {
      setError({
        showSubmitError: true,
        errorMsg: "User Registered Successfully",
      });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setError({
        showSubmitError: true,
        errorMsg: "Mandatory Input Fields Cannot be left blank",
      });
    } else if (repeatPassword !== password) {
      setError({
        showSubmitError: true,
        errorMsg: "Passwords are not matched. Please check",
      });
    } else {
      checkPassword();
    }
  };

  return (
    <div className="bg-container">
      <div className="login-form-container">
        <div className="sliderContainer">
          <BootStrapSlider />
        </div>
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://dsp.realworldhealth.tech/static/media/rwhealth-logo.0a7edba8.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <h1 className="form-heading">Create an Account</h1>
          <div className="input-container">
            <label className="input-label" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="username-input-field"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="username-input-field"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="username-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="repeatPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="repeatPassword"
              className="password-input-field"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" className="login-button">
            Register
          </button>
          {error.showSubmitError && (
            <p className="error-message">*{error.errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
