import React, { FC } from "react";
import usImage from "../../assets/images/usImage.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./us.css";
import Team from "../../components/team/team";

const Us: FC = () => {
  const usSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${usImage})`,
    "text-decoration": "none",
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div className="centerSection">
        <div className="usContainer">
          <div style={usSectionDiv}>
            <p className="usText">us</p>
          </div>
        </div>

        <div className="rightSection">
          <Team
            memberImg={usImage}
            memberName="name"
            memberDescr="desc"
            memberQuote="quote"
            memberRole="role"
          />
          <Team
            memberImg={usImage}
            memberName="name2"
            memberDescr="desc2"
            memberQuote="quote2"
            memberRole="role2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Us;
