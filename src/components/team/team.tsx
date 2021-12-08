import React, { FC } from "react";

import "./team.css";

type Props = {
  memberImg?: string;
  memberName: string;
  memberRole: string;
  memberQuote: string;
  memberDescr: string;
};

const Team: FC<Props> = (props: Props) => {
  const { memberImg, memberName, memberRole, memberQuote, memberDescr } = props;
  return (
    <div className="member">
      <div className="card">
        <img className="memberImg" src={memberImg} alt="Member" />
        <p className="memberName">{memberName}</p>
      </div>
      <div className="rightSectionMember">
        <div className="memberRole">{memberRole}</div>
        <div className="memberQuote">{memberQuote}</div>
        <div className="memberDescr">{memberDescr}</div>
      </div>
    </div>
  );
};

export default Team;
