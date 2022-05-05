import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return ( <div className="login-menu">
    <div>
      <Link to="/Submit">회원가입</Link>
    </div>
    <div>
      <Link to="/FindEmail">이메일 찾기</Link>
    </div>
    <div>
      <Link to="/FindPassword">비밀번호 찾기</Link>
    </div>
  </div>
    )
}

export default Footer;