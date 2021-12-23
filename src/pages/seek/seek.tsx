import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import seekBottomImage from "../../assets/images/seekBottomImage.svg";
import seekTopImage from "../../assets/images/seekTopImage.svg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./seek.css";

const Seek: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLoading);
    }, 3200);
  }, [isLoading]);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0,
  });

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
    <div style={{ overflowY: "hidden", width: "100vw" }}>
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
              <p className="headerTop">We Redefine Spaces.</p>
              <div className="rightArrow" ref={ref}>
                <img
                  src={require("../../assets/images/leftArrow.svg").default}
                  alt="Right Arrow"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "rotate(180deg)",
                    borderRadius: "0.5vw",
                  }}
                />
                <div
                  className="fadingRightEffectSeek"
                  style={{
                    animationPlayState: inView ? "running" : "paused",
                    height: "100%",
                  }}
                ></div>
              </div>
              <p className="quoteTop">
                “When you visualise, then you materialise.”
              </p>
              <p className="descTop">
                At Clay Studios, we value creativity and collaboration to foster
                the development of talents. Our designers dedicate themselves to
                a philosophy of thoughtful design. We strive to create unique
                spaces, well-executed projects, and innovative designs.
              </p>
            </div>
          </div>
          <div className="bottomSection">
            <div className="text">
              <p className="headerBtm">Work With Us.</p>
              <div className="leftArrowSeek" ref={ref2}>
                <img
                  src={require("../../assets/images/leftArrow.svg").default}
                  alt="Left Arrow"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5vw",
                  }}
                />
                <div
                  className="fadingLeftEffectSeek"
                  style={{
                    animationPlayState: inView2 ? "running" : "paused",
                  }}
                ></div>
              </div>
              <p className="quoteBtm">“Your life's essential partner.”</p>
              <p className="descBtm">
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
