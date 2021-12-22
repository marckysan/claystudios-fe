import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import seekTopImage from "../../assets/images/seekTopImage.svg";
import seekBottomImage from "../../assets/images/seekBottomImage.svg";
import "./seek.css";

const Seek: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLoading);
    }, 3200);
  }, [isLoading]);

  return isLoading ? (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Header />
      <div className="homeSection">
        <div className="yoursContainerSeek">
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yoursImage"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="seekContainerSeek">
          <img
            className="seekImageHome"
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="usContainerSeek">
          <img
            className="usImageHome"
            src={require("../../assets/images/usImage.png").default}
            alt="usImage"
          />
          <p className="usText">us</p>
        </div>
        <div className="meetContainerSeek">
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
    <div style={{ overflowY: "hidden", width: "100vw", height: "100vh" }}>
      <Header />
      <div className="centerSection">
        <div className="seekContainer">
          <img
            className="seekImageHome"
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="rightSection">
          <div className="topSection">
            <img className="houseImage" src={seekTopImage} alt="topImage" />
            <div className="text">
              <p className="header">We Redefine Spaces.</p>
              <div className="rightArrow">pointpoint</div>
              <p className="quote">
                “When you visualise, then you materialise.”
              </p>
              <p className="desc">
                At Clay Studios, we value creativity and collaboration to foster
                the development of talents. Our designers dedicate themselves to
                a philosophy of thoughtful design. We strive to create unique
                spaces, well-executed projects, and innovative designs.
              </p>
            </div>
          </div>
          <div className="bottomSection">
            <div className="text">
              <p className="header">Work With Us.</p>
              <div className="rightArrow">pointpoint</div>
              <p className="quote">“Your life's essential partner.”</p>
              <p className="desc">
                Clay Studios works with you from concept to completion.
                Together, we will develop the best solutions to make your
                project even better suited for its purpose or concept. Our team
                will walk with you at every step along the way.
              </p>
            </div>
            <img
              className="houseImage"
              src={seekBottomImage}
              alt="bottomImage"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Seek;
