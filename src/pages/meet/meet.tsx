import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import EnquiryForm from "../../components/enquiryForm/enquiryForm";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./meet.css";

const Meet: FC = () => {
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
        <div className="yoursContainerMeet">
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yoursImage"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="seekContainerMeet">
          <img
            className="seekImageHome"
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="usContainerMeet">
          <img
            className="usImageHome"
            src={require("../../assets/images/usImage.png").default}
            alt="usImage"
          />
          <p className="usText">us</p>
        </div>
        <div className="meetContainerMeet">
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
        <div className="meetContainer">
          <img
            className="meetImageHome"
            src={require("../../assets/images/meetImage.png").default}
            alt="meetImage"
          />
          <p className="meetText">meet</p>
        </div>

        <div className="rightSection">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.981076783202!2d103.87620136715918!3d1.327399938038034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f56298db39%3A0xd252ca15e4794c87!2sSingapore%20408720!5e0!3m2!1sen!2ssg!4v1638775401977!5m2!1sen!2ssg"
              className="map"
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact">
            <div className="contactHeader">
              <h3 className="contactHeaderWords">
                <SocialIcon
                  url="https://www.instagram.com/claystudios_sg/"
                  bgColor="white"
                  fgColor="black"
                  className="socialMediaIcon"
                />
                Let's Meet!
              </h3>
              <div className="leftArrowDiv" ref={ref}>
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
                  className="fadingLeftEffect"
                  style={{
                    animationPlayState: inView ? "running" : "paused",
                  }}
                ></div>
              </div>
            </div>
            <div className="contactContent">
              <div className="office">
                <h2 className="contactLabel">Office:</h2>
                <p className="contactText">
                  3027 Ubi Road 1, #04-122,
                  <br /> Kampong Ubi Industrial Estate <br />
                  Singapore
                </p>
              </div>
              <div className="call">
                <h2 className="contactLabel">Call:</h2>
                <p className="contactText">
                  +65 9866 2341 (M) <br />
                  +65 6635 2166 (O)
                </p>
              </div>
              <div className="nameCard">
                <h2 className="contactLabel">Name Card:</h2>
                <Link
                  className="btn"
                  to="/claystudiosNamecard.jpg"
                  target="_blank"
                  download="claystudiosNamecard.jpg"
                >
                  <span className="noselect">Download</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="enquiry">
            <div className="enquiryHeader">
              <h3 className="enquiryHeaderWords">Send an Enquiry</h3>
              <div className="leftArrowDiv" ref={ref2}>
                <img
                  src={require("../../assets/images/leftArrow.svg").default}
                  alt="Left Arrow"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "rotate(180deg)",
                  }}
                />
                <div
                  className="fadingRightEffect"
                  style={{
                    animationPlayState: inView2 ? "running" : "paused",
                  }}
                ></div>
              </div>
            </div>
            <EnquiryForm></EnquiryForm>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meet;
