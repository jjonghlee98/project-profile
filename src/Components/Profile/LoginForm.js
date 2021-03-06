import React from "react";
import Routess from "./Routess";
import Card from "../UI/Card";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <Card className="login-form__main">
        <form className="login-form__control">
          <div className="login-form__email">
            <label>이메일</label>
            <input type="email" placeholder="Enter an email" required />
          </div>
          <div className="login-form__pwd">
            <label>비밀번호</label>
            <input type="password" placeholder="Enter a number" required />
          </div>
          <div className="login-form__button">
            <button>로그인</button>
          </div>
        </form>
      </Card>

      <Routess />

    </div>
  );
};

export default LoginForm;
