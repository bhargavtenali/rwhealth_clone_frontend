import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "./index.css";

import BootStrapSlider from "../BootStrapSlider";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ showSubmitError: false, errorMsg: "" });

  const onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
    });
    history.replace("/");
  };

  const onSubmitFailure = (errorMsg) => {
    setError({ showSubmitError: true, errorMsg });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure(data.error_msg);
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
          <h1 className="form-heading">
            Welcome to your Data Science Platform
          </h1>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              Email
            </label>
            <input
              type="text"
              id="username"
              className="username-input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <Link className="nav-link" to="/forgotpasswordfirst">
            <p className="forgotPasswordTextFinal">Forgot Password ?</p>
          </Link>
          <Link className="nav-link" to="/register">
            <p className="forgotPasswordTextFinal">
              New User ? Click to Register
            </p>
          </Link>
          <button type="submit" className="login-button">
            Login
          </button>
          {error.showSubmitError && (
            <p className="error-message-final">*{error.errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
