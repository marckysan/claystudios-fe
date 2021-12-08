import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { SocialIcon } from "react-social-icons";
import meetImage from "../../assets/images/meetImage.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./meet.css";

const Meet: FC = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const meetSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${meetImage})`,
    textDecoration: "none",
  };

  const downloadNameCard = () => {
    window.open("https://google.com");
  };

  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <Header />
      <div className="centerSection">
        <div className="meetContainer">
          <div style={meetSectionDiv}>
            <p className="meetText">meet</p>
          </div>
        </div>

        <div className="rightSection">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.981076783202!2d103.87620136715918!3d1.327399938038034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f56298db39%3A0xd252ca15e4794c87!2sSingapore%20408720!5e0!3m2!1sen!2ssg!4v1638775401977!5m2!1sen!2ssg"
            className="map"
            loading="lazy"
          ></iframe>
          <div className="contact">
            <div className="contactHeader">
              <h3 className="contactHeaderWords">
                <SocialIcon
                  url="https://www.instagram.com/claystudios_sg/"
                  bgColor="white"
                  fgColor="black"
                />
                Let's Meet!
              </h3>
              <div className="leftArrowDiv">
                <img
                  src={require("../../assets/images/leftArrow.svg").default}
                  alt="Left Arrow"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5vw",
                  }}
                />
                <div className="fadingLeftEffect"></div>
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
                <div className="btn" onClick={() => downloadNameCard()}>
                  <span className="noselect">Download</span>
                </div>
              </div>
            </div>
          </div>
          <div className="enquiry">
            <div className="enquiryHeader">
              <h3 className="enquiryHeaderWords">Send an Enquiry</h3>
              <div className="leftArrowDiv" ref={ref}>
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
                  style={{ animationPlayState: inView ? "running" : "paused" }}
                ></div>
              </div>
            </div>
            <div className="inputSection">
              <label>First Name</label>
              <input style={{ width: "30%" }}></input>
            </div>
            <div className="inputSection">
              <label>Last Name</label>
              <input style={{ width: "30%" }}></input>
            </div>
            <div className="inputSection">
              <label>Your Email</label>
              <input style={{ width: "30%" }}></input>
            </div>
            <div className="inputSection">
              <label>Email Subject</label>
              <input style={{ width: "30%" }}></input>
            </div>
            <div className="inputSection">
              <label>Your Message</label>
              <textarea style={{ width: "30%" }}></textarea>
            </div>
            <div
              className="inputSection"
              style={{ width: "30%", flexDirection: "row" }}
            >
              <input type="checkbox"></input>
              By checking this box and submitting your information, you are
              granting us permission to email you. You may unsubscribe at any
              time.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meet;
