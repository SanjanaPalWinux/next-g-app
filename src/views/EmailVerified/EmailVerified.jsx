import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import "./emailverified.scss";

import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <div className="email-verified">
      <div>
        <IoIosCheckboxOutline height="4rem" width="4rem" />
      </div>
      <p>Congrats you can use this email to login to AEON</p>
      <Button
        onClick={() => navigate("/dashboard")}
        children="Go to Dashboard"
      />
    </div>
  );
};

export default EmailVerified;
