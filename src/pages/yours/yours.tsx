import React, { FC, useEffect, useState } from "react";
import yoursImage from "../../assets/images/yoursImage.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ProjectCard from "../../components/projectCard/projectCard";
import "./yours.css";

const Yours: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <div className="homeSection" style={{ position: "absolute" }}>
        <div className="yoursContainerYours">
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yoursImage"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="seekContainerYours">
          <img
            className="seekImageHome"
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="usContainerYours">
          <img
            className="usImageHome"
            src={require("../../assets/images/usImage.png").default}
            alt="usImage"
          />
          <p className="usText">us</p>
        </div>
        <div className="meetContainerYours">
          <img
            className="meetImageHome"
            src={require("../../assets/images/meetImage.png").default}
            alt="meetImage"
          />
          <p className="meetText">meet</p>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
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
        <div className="rightSection">
          <ProjectCard img={yoursImage} name="Project A"></ProjectCard>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Yours;
