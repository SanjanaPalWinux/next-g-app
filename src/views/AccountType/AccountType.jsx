import React, { useState } from "react";

import "./accounttype.scss";
import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";
import { accountType, welcomeText } from "./constant";

const InfoCard = ({ item, selectedAccountType, handleAccountTypeChange }) => {
  return (
    <div className="cards">
      <div>
        <input
          type="radio"
          id={item.label}
          name="accountType"
          value={item.label}
          checked={selectedAccountType === item.label}
          onChange={handleAccountTypeChange}
        />
        <label htmlFor={item.label}>{item.label}</label>
      </div>

      <div className="info">
        <div> {item.info}</div>
        <div> {item.icon} </div>
      </div>
    </div>
  );
};

const AccountType = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const navigate = useNavigate();

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  const handleContinue = () => {
    localStorage.setItem("accountType", selectedAccountType);
    navigate("/sign-up");
  };

  return (
    <div className="account-type">
      <div className="left-section">
        <h3>Welcome To AEON</h3>
        <p>
          An individual account is the best way to manage crypto and portfolios
        </p>

        {welcomeText.map((text, index) => {
          return (
            <div key={index}>
              <input type="checkbox" />
              <label htmlFor="scales">{text}</label>
            </div>
          );
        })}
      </div>

      <div className="right-section">
        <h3>Choose your account Type</h3>

        {accountType.map((type, index) => (
          <InfoCard
            item={type}
            selectedAccountType={selectedAccountType}
            key={index}
            handleAccountTypeChange={handleAccountTypeChange}
          />
        ))}

        <Button onClick={handleContinue} children={"Continue"} />
      </div>
    </div>
  );
};

export default AccountType;
