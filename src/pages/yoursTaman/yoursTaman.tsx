import React, { FC } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursTaman.css";

const YoursTaman: FC = () => {
  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <Header />
      <div className="centerSection">
        <div className="yoursContainerHome">
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yours"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="rightSection">Hello</div>
      </div>
      <Footer />
    </div>
  );
};

export default YoursTaman;
