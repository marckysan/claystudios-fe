import React, { FC, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import seekImage from "../../assets/images/seekImage.png";
import seekTopImage from "../../assets/images/seekTopImage.svg";
import seekBottomImage from "../../assets/images/seekBottomImage.svg";
import "./seek.css";

const Seek: FC = () => {
  useEffect(() => {
    document.title = "seek";
  }, []);

  const seekSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${seekImage})`,
    "text-decoration": "none",
  };
  return (
    <div style={{ overflowY: "hidden" }}>
      <Header />
      <div className="centerSection">
        <div className="seekContainer">
          <div style={seekSectionDiv}>
            <p className="seekText">seek</p>
          </div>
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
