import React from "react";
import LoginForm from "./login-form";
import LoginLeftSection from "./login-left-section";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <LoginLeftSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
