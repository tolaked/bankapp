import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  buttonLink,
  detailscontainer,
  detailsParagraph,
  footerPara,
  image,
  input,
  inputBox,
  inputButton,
  inputTopic,
  login,
  span,
} from "./signupstyle";
import BankApp from "../../assets/BankApp.png";

const Signupdetails = () => {
  return (
    <div>
      <img src={BankApp} alt="logo" style={image} />
      <div style={detailscontainer}>
        <p style={detailsParagraph}>
          Welcome to your <span style={span}>BankApp</span> account
        </p>
        <div style={input}>
          <label style={inputTopic}>What would you like us to call you *</label>
          <input
            placeholder="Enter your first name"
            type="text"
            style={inputBox}
            required
          />
          <input
            placeholder="Enter your last name"
            type="text"
            style={inputBox}
            required
          />
          <label style={inputTopic}>
            Set a password to secure your account
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            style={inputBox}
            required
          />
          <label style={inputTopic}>Your Currency*</label>
          <select name="currency" style={inputBox} required>
            <options value="Dollars">Dollars</options>
            <options value="Pounds">GBP</options>
          </select>
          <button style={inputButton}>
            <Link to={"/Dashboard"} style={buttonLink}>
              Continue
            </Link>
          </button>
        </div>
        <p style={footerPara}>
          Already have an account?
          <Link to={"/login"} style={login}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signupdetails;
