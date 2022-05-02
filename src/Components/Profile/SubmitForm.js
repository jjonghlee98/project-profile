import React from "react";

import Card from "../UI/Card";
import "./SubmitForm.css";

const Submit = () => {
  return (
    <Card className="submit-form__main">
      <form className="submit-form__control">
        <div className="submit-form__name">
          <label>이름</label>
          <input type="text" placeholder="Enter a name" required/>
        </div>
        <div className="submit-form__email">
          <label>이메일</label>
          <input type="email" placeholder="Enter a email" required/>
        </div>
        <div className="submit-form__button">
          <button>인증</button>
        </div>
        <div className="submit-form__num">
          <label>학번</label>
          <input type="text" placeholder="Enter a number" required/>
        </div>
        <div className="submit-form__pwd">
          <label>비밀번호</label>
          <input type="password" placeholder="Enter a number" required/>
        </div>
        <div className="submit-form__nick">
          <label>닉네임</label>
          <input type="text" placeholder="Enter a nickname" required/>
        </div>
        <div className="submit-form__clear">
          <button>회원가입</button>
        </div>
      </form>
    </Card>
  );
};

export default Submit;
