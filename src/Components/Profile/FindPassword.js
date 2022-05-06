import React from "react";

import Card from "../UI/Card";
import "./FindPassword.css";

const FindPassword = () => {
  return (
    <div>
      <h2>비밀번호찾기</h2>
      <Card className="find-pw__main">
        <form className="find-pw__control">
          <div className="find-pw__email">
            <label>이메일</label>
            <input type="email" placeholder="Enter an email" />
            <button>인증번호발송</button>
          </div>

          <div className="find-pw__cert">
            <label>인증번호</label>
            <input type="text" placeholder="6자리 인증번호 입력" />
            <button>인증</button>
            <span>0:00</span>
          </div>

          <div className="change-pw">
            <label>새 비밀번호</label>
            <input type="password" disabled />
          </div>

          <div className="change-pw-check">
            <label>새 비밀번호 재입력</label>
            <input type="password" disabled />
          </div>

          <div className="find-pw__button">
            <button>비밀번호 변경</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FindPassword;
