import React from "react";

const Dashboard = () => {
  const email = localStorage.getItem("email");
  const type = localStorage.getItem("accountType");

  return (
    <div>{` Hi ${email}  welocme to AEON . You have chooses ${type} account type`}</div>
  );
};

export default Dashboard;
