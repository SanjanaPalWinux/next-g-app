import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../views/Login/Login";
import SignUp from "../views/SignUp/signup";
import VerifyOTP from "../views/VerifyOtp/VerifyOTP";
import AccountType from "../views/AccountType/AccountType";
import EmailVerified from "../views/EmailVerified/EmailVerified";
import Dashboard from "../views/Dashboard";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/verify-otp",
      element: <VerifyOTP />,
    },
    {
      path: "/account-type",
      element: <AccountType />,
    },
    {
      path: "/success",
      element: <EmailVerified />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
