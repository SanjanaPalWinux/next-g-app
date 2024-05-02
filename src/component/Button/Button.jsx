import React from "react";
import "./button.scss";

const Button = ({ type, onClick = () => {}, children, className }) => {
  return (
    <button type={type} onClick={onClick} className={`black-button ${className} `}>
      {children}
    </button>
  );
};

export default Button;
