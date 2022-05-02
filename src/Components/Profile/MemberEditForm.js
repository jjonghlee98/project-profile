import React from "react";

import Card from "../UI/Card";
import "./MemberEditForm.css";

const MemberEditForm = () =>
{
    return (
        <Card className="MemberEditForm_main">
            <form className="MemberEditForm_control">
                <div className="MemberEditForm_ProfilePicture">
                    <label>프로필 사진</label>
                    <input type="file" placeholder="profile" required/>
                    {/*<form action="" method="post">*/}
                    {/*    <input type="file" name="profile"></input>*/}
                    {/*</form>*/}
                </div>
                <div className="MemberEditForm_ChangeNickname">
                    <label>닉네임 변경</label>
                    <input type="text" placeholder="Enter a Change Nickname" required/>
                </div>
                <div className="MemberEditForm_name">
                    <label>이름</label>
                    <input type="text" placeholder="Enter a name" required/>
                </div>
                <div className="MemberEditForm_department_1">
                    <label>학부</label>
                    <input type="department" placeholder="Enter a department" required/>
                </div>
                <div className="MemberEditForm_department_2">
                    <label>학과</label>
                    <input type="department" placeholder="Enter a department" required/>
                </div>
                <div className="MemberEditForm_num">
                    <label>학번</label>
                    <input type="text" placeholder="Enter a number" required/>
                </div>
                <div className="MemberEditForm_beforePasswordChange">
                    <label>비밀번호 변경 전</label>
                    <input type="password" placeholder="Before password change" required/>
                </div>
                <div className="MemberEditForm_AfterPasswordChange">
                    <label>비밀번호 변경 후</label>
                    <input type="password" placeholder="Enter confirmation after changing password" required/>
                </div>
                <div className="MemberEditForm_ConfirmAfterPasswordChange">
                    <label>비밀번호 변경 후 확인</label>
                    <input type="password" placeholder="Enter confirmation after changing password" required/>
                </div>

                <div className="MemberEditForm_clear">
                    <button>정보수정</button>
                </div>
                <div className="MemberEditForm_secession">
                    <button>회원탈퇴</button>
                </div>
            </form>
        </Card>
    );
};

export default MemberEditForm;