import React from "react";

import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
        <h2>로그인</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
