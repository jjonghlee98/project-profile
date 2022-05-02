import React from "react";

import MemberEditForm from "./MemberEditForm";
import "./MemberEdit.css";

const MemberEdit = () =>
{
    return (
        <div className="memberEdit">
            <h2 className="memberEdit_h2">정보수정</h2>
            <MemberEditForm />
        </div>
    );
};

export default MemberEdit;
