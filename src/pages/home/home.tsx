import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Loading from "../../components/loading/loading";
import "./home.css";

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
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
    history.push("/yours");
  };

  const redirectSeek = () => {
    history.push("/seek");
  };

  const redirectUs = () => {
    history.push("/us");
  };

  const redirectMeet = () => {
    history.push("/meet");
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
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yoursImage"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="seekContainerHome" onClick={redirectSeek}>
          <img
            className="seekImageHome"
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="usContainerHome" onClick={redirectUs}>
          <img
            className="usImageHome"
            src={require("../../assets/images/usImage.png").default}
            alt="usImage"
          />
          <p className="usText">us</p>
        </div>
        <div className="meetContainerHome" onClick={redirectMeet}>
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
  );
};

export default Home;
