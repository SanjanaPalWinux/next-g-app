import React from "react";
import "./textfield.scss";

const TextInputField = ({ labelText, type, name, value, handleOnChange }) => {
  return (
    <div className="text-field">
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} value={value} onChange={handleOnChange} />
    </div>
  );
};

export default TextInputField;
