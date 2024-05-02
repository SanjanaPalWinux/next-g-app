import React from "react";
import "./verifyotp.scss";
import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };
  return (
    <div className="verify-otp">
      <div className="left-section">
        <h3>Check your email</h3>
      </div>
      <div className="right-section">
        <h3>Verify OTP</h3>
        <p className="sub-heading">
          We have sent 6-digit OTP.Please enter the code
        </p>

        <form onSubmit={handleSubmit}>
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                maxLength="1"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
            );
          })}
          <p>Resend OTP code in 02:30</p>
          <Button type="submit" children="Verify" />
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
