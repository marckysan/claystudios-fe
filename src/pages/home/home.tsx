import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import meetImage from "../../assets/images/meetImage.png";
import seekImage from "../../assets/images/seekImage.png";
import usImage from "../../assets/images/usImage.png";
import yoursImage from "../../assets/images/yoursImage.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Loading from "../../components/loading/loading";
import "./home.css";

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLoading);
    }, 5200);
  }, [isLoading]);

  const yoursSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${yoursImage})`,
    "text-decoration": "none",
  };

  const seekSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${seekImage})`,
    "text-decoration": "none",
  };

  const usSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${usImage})`,
    "text-decoration": "none",
  };

  const meetSectionDiv = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${meetImage})`,
    "text-decoration": "none",
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <div className="homeSection">
        <div className="yoursContainer">
          <Link to="/yours" style={yoursSectionDiv} className="yoursSection">
            <p className="yoursText">yours</p>
          </Link>
        </div>
        <div className="seekContainer">
          <Link to="/seek" style={seekSectionDiv}>
            <p className="seekText">seek</p>
          </Link>
        </div>
        <div className="usContainer">
          <Link to="/us" style={usSectionDiv}>
            <p className="usText">us</p>
          </Link>
        </div>
        <div className="meetContainer">
          <Link to="/meet" style={meetSectionDiv}>
            <p className="meetText">meet</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
