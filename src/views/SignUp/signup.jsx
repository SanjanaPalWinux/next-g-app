import React, { useState } from "react";
import TextInputField from "../../component/TextInputField/TextInputField";
import Button from "../../component/Button/Button";
import "./signup.scss";
import { useNavigate } from "react-router-dom";
import { signUpFields } from "./constant";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (inputValues) => {
    let newErrors = {};

    if (!inputValues.firstname.trim()) {
      newErrors["firstname"] = "Please enter firstname";
    }
    if (!inputValues.lastname.trim()) {
      newErrors["lastname"] = "Please enter lastname";
    }
    if (!inputValues.firstname.trim()) {
      newErrors["email"] = "Please enter email";
    }

    return newErrors;
  };

  console.log(error);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      navigate("/verify-otp");
    } else {
      setError(newErrors);
    }
  };

  return (
    <div className="sign-up">
      <div className="left-section">
        <h3>Let's get started</h3>
      </div>
      <div className="right-section">
        <h3>Create your Individual Account</h3>
        <p>Be sure to enter your legal name</p>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            {signUpFields.map((field) => {
              return (
                <div className="outer">
                  <TextInputField
                    labelText={field.label}
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    handleOnChange={handleOnChange}
                  />
                  {error && error[field.name] && (
                    <p style={{ color: "red" }}>{error[field.name]}</p>
                  )}
                </div>
              );
            })}
          </div>

          <input type="checkbox" />
          <label for="scales">Terms and conditions</label>

          <Button type="submit" children="Continue" />
        </form>

        <p>
          Not looking for and individual account?
          <span>
            <a href="/sign-up">Signup for business account</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
