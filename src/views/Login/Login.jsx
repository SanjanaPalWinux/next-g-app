import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

import Button from "../../component/Button/Button";
import TextInputField from "../../component/TextInputField/TextInputField";
import { buttons } from "./constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter email");
    } else {
      localStorage.setItem("email", email);

      navigate("/account-type");
    }
  };
  return (
    <div className="login-form">
      <h3>Log in</h3>
      <form onSubmit={handleSubmit}>
        <TextInputField
          labelText="Email Address"
          type="email"
          name="email"
          value={email}
          handleOnChange={handleOnChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button type="submit" children="Continue with email" />
      </form>

      <p>
        Don't have an account?
        <span>
          <a href="/sign-up">Signup</a>
        </span>
      </p>

      {buttons.map((button) => {
        return (
          <Button
            key={button.key}
            type={button.type}
            children={button.children}
            className="white-button"
          />
        );
      })}
    </div>
  );
};

export default Login;
