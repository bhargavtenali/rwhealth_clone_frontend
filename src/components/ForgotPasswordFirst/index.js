import React from "react";
import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import BootStrapSlider from "../BootStrapSlider";

function ForgotPasswordFirst(props) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const submitForm = (event) => {
    event.preventDefault();
    localStorage.setItem("userEmail", email);
    navigate("/forgotpasswordsecond");
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
          <h1 className="form-heading">Forgot Password</h1>
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
          <button type="submit" className="login-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordFirst;
