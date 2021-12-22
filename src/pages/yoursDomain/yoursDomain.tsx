import React, { FC, useState } from "react";
import Gallery from "react-grid-gallery";
import { useHistory } from "react-router";
import domain1 from "../../assets/images/domain21/domain1.jpg";
import domain10 from "../../assets/images/domain21/domain10.jpg";
import domain11 from "../../assets/images/domain21/domain11.jpg";
import domain12 from "../../assets/images/domain21/domain12.jpg";
import domain13 from "../../assets/images/domain21/domain13.jpg";
import domain14 from "../../assets/images/domain21/domain14.jpg";
import domain15 from "../../assets/images/domain21/domain15.jpg";
import domain16 from "../../assets/images/domain21/domain16.jpg";
import domain17 from "../../assets/images/domain21/domain17.jpg";
import domain18 from "../../assets/images/domain21/domain18.jpg";
import domain19 from "../../assets/images/domain21/domain19.jpg";
import domain2 from "../../assets/images/domain21/domain2.jpg";
import domain20 from "../../assets/images/domain21/domain20.jpg";
import domain21 from "../../assets/images/domain21/domain21.jpg";
import domain22 from "../../assets/images/domain21/domain22.jpg";
import domain23 from "../../assets/images/domain21/domain23.jpg";
import domain24 from "../../assets/images/domain21/domain24.jpg";
import domain3 from "../../assets/images/domain21/domain3.jpg";
import domain4 from "../../assets/images/domain21/domain4.jpg";
import domain5 from "../../assets/images/domain21/domain5.jpg";
import domain6 from "../../assets/images/domain21/domain6.jpg";
import domain7 from "../../assets/images/domain21/domain7.jpg";
import domain8 from "../../assets/images/domain21/domain8.jpg";
import domain9 from "../../assets/images/domain21/domain9.jpg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursDomain.css";

const YoursDomain: FC = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const items = [
    {
      src: domain1,
      thumbnail: domain1,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: domain2,
      thumbnail: domain2,
    },
    {
      src: domain3,
      thumbnail: domain3,
    },
    {
      src: domain4,
      thumbnail: domain4,
    },
    {
      src: domain5,
      thumbnail: domain5,
    },
    {
      src: domain6,
      thumbnail: domain6,
    },
    {
      src: domain7,
      thumbnail: domain7,
    },
    {
      src: domain8,
      thumbnail: domain8,
    },
    {
      src: domain9,
      thumbnail: domain9,
    },
    {
      src: domain10,
      thumbnail: domain10,
    },
    {
      src: domain11,
      thumbnail: domain11,
    },
    {
      src: domain12,
      thumbnail: domain12,
    },
    {
      src: domain13,
      thumbnail: domain13,
    },
    {
      src: domain14,
      thumbnail: domain14,
    },
    {
      src: domain15,
      thumbnail: domain15,
    },
    {
      src: domain16,
      thumbnail: domain16,
    },
    {
      src: domain17,
      thumbnail: domain17,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: domain18,
      thumbnail: domain18,
    },
    {
      src: domain19,
      thumbnail: domain19,
    },
    {
      src: domain20,
      thumbnail: domain20,
    },
    {
      src: domain21,
      thumbnail: domain21,
    },
    {
      src: domain22,
      thumbnail: domain22,
    },
    {
      src: domain23,
      thumbnail: domain23,
    },
    {
      src: domain24,
      thumbnail: domain24,
    },
  ];

  const redirectBackToYours = () => {
    setIsClicked(true);
    setTimeout(() => {
      history.push("/yours");
    }, 800);
  };

  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <Header />
      <div className="centerSection">
        <div className="yoursContainer" onClick={redirectBackToYours}>
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yours"
          />
          <p className="yoursText">yours</p>
        </div>
        <div
          className="rightSection"
          style={
            isClicked
              ? {
                  animation: "rightSectionFadeOut 0.8s ease",
                  animationFillMode: "forwards",
                }
              : {}
          }
        >
          <div className="imageGrid">
            <Gallery
              images={items}
              enableLightbox={true}
              backdropClosesModal
              enableImageSelection={false}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YoursDomain;
