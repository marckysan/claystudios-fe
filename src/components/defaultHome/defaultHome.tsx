import { FC } from "react";
import meetImage from "../../assets/images/meetImage.png";
import seekImage from "../../assets/images/seekImage.png";
import usImage from "../../assets/images/usImage.png";
import yoursImage from "../../assets/images/yoursImage.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./home.css";

type AnimationProps = {
  firstAnimation?: any;
  secondAnimation?: any;
  thirdAnimation?: any;
  fourthAnimation?: any;
  postAnimation?: any;
};

const DefaultHome: FC<AnimationProps> = (props: AnimationProps) => {
  const {
    firstAnimation,
    secondAnimation,
    thirdAnimation,
    fourthAnimation,
    postAnimation,
  } = props;

  const yoursSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${yoursImage})`,
    textDecoration: "none",
    ...firstAnimation,
  };

  const seekSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${seekImage})`,
    textDecoration: "none",
    ...secondAnimation,
  };

  const usSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${usImage})`,
    textDecoration: "none",
    ...thirdAnimation,
  };

  const meetSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${meetImage})`,
    textDecoration: "none",
    ...fourthAnimation,
  };

  return (
    <div>
      <Header />
      <div className="homeSection">
        <div className="yoursContainer">
          <div style={yoursSectionDiv} className="yoursSection">
            <p className="yoursText">yours</p>
          </div>
        </div>
        <div className="seekContainer">
          <div style={seekSectionDiv}>
            <p className="seekText">seek</p>
          </div>
        </div>
        <div className="usContainer">
          <div style={usSectionDiv}>
            <p className="usText">us</p>
          </div>
        </div>
        <div className="meetContainer">
          <div style={meetSectionDiv}>
            <p className="meetText">meet</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultHome;
