import React from "react";

import Card from "../UI/Card";
import "./FindEmail.css";

export default function FindEmail() {
    return (
        <div>
            <h2>이메일 찾기</h2>
            <Card className="find-email__main">
                <form className="find-email__control">
                    <div className="find-email__name">
                        <label>이름</label>
                        <input type="text" placeholder="Enter a name"></input>
                    </div>

                    <div className="find-email__button">
                        <button>이메일 찾기</button>
                    </div>

                    <hr/>

                    <p className="result_description">
                        " " 이름으로 가입된 이메일 목록입니다.
                    </p>

                    <ul className="result">
                    </ul>
                </form>
            </Card>
        </div>
    );
};