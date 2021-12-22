import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Loading from "../../components/loading/loading";
import "./home.css";

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isYoursClicked, setIsYoursClicked] = useState(false);
  const [isSeekClicked, setIsSeekClicked] = useState(false);
  const [isUsClicked, setIsUsClicked] = useState(false);
  const [isMeetClicked, setIsMeetClicked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.title = "home";
    localStorage.setItem("isYoursNested", JSON.stringify(false));
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLoading);
    }, 5200);
  }, [isLoading]);

  const redirectYours = () => {
    setIsYoursClicked(true);
    setTimeout(() => {
      history.push("/yours");
    }, 1000);
  };

  const redirectSeek = () => {
    setIsSeekClicked(true);
    setTimeout(() => {
      history.push("/seek");
    }, 1000);
  };

  const redirectUs = () => {
    setIsUsClicked(true);
    setTimeout(() => {
      history.push("/us");
    }, 1000);
  };

  const redirectMeet = () => {
    setIsMeetClicked(true);
    setTimeout(() => {
      history.push("/meet");
    }, 1000);
  };

  return isLoading ? (
    <div
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      className="loadingScreenFade"
    >
      <Loading />
    </div>
  ) : (
    <div className="homeFadeIn">
      <Header />
      <div className="homeSection">
        <div className="yoursContainerHome" onClick={redirectYours}>
          <img
            className={
              isYoursClicked ? "yoursImageHomeAfterClick" : "yoursImageHome"
            }
            src={require("../../assets/images/yoursImage.png").default}
            alt="yoursImage"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="seekContainerHome" onClick={redirectSeek}>
          <img
            className={
              isSeekClicked ? "seekImageHomeAfterClick" : "seekImageHome"
            }
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="usContainerHome" onClick={redirectUs}>
          <img
            className={isUsClicked ? "usImageHomeAfterClick" : "usImageHome"}
            src={require("../../assets/images/usImage.png").default}
            alt="usImage"
          />
          <p className="usText">us</p>
        </div>
        <div className="meetContainerHome" onClick={redirectMeet}>
          <img
            className={
              isMeetClicked ? "meetImageHomeAfterClick" : "meetImageHome"
            }
            src={require("../../assets/images/meetImage.png").default}
            alt="meetImage"
          />
          <p className="meetText">meet</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
