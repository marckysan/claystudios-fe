import React, { FC, useState } from "react";
import Gallery from "react-grid-gallery";
import { useHistory } from "react-router";
import vibes1 from "../../assets/images/vibesAtEastCoast/vibes1.jpg";
import vibes10 from "../../assets/images/vibesAtEastCoast/vibes10.jpg";
import vibes11 from "../../assets/images/vibesAtEastCoast/vibes11.jpg";
import vibes12 from "../../assets/images/vibesAtEastCoast/vibes12.jpg";
import vibes13 from "../../assets/images/vibesAtEastCoast/vibes13.jpg";
import vibes14 from "../../assets/images/vibesAtEastCoast/vibes14.jpg";
import vibes15 from "../../assets/images/vibesAtEastCoast/vibes15.jpg";
import vibes16 from "../../assets/images/vibesAtEastCoast/vibes16.jpg";
import vibes17 from "../../assets/images/vibesAtEastCoast/vibes17.jpg";
import vibes18 from "../../assets/images/vibesAtEastCoast/vibes18.jpg";
import vibes2 from "../../assets/images/vibesAtEastCoast/vibes2.jpg";
import vibes3 from "../../assets/images/vibesAtEastCoast/vibes3.jpg";
import vibes4 from "../../assets/images/vibesAtEastCoast/vibes4.jpg";
import vibes5 from "../../assets/images/vibesAtEastCoast/vibes5.jpg";
import vibes6 from "../../assets/images/vibesAtEastCoast/vibes6.jpg";
import vibes7 from "../../assets/images/vibesAtEastCoast/vibes7.jpg";
import vibes8 from "../../assets/images/vibesAtEastCoast/vibes8.jpg";
import vibes9 from "../../assets/images/vibesAtEastCoast/vibes9.jpg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursVibes.css";

const YoursVibes: FC = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const items = [
    {
      src: vibes1,
      thumbnail: vibes1,
    },
    {
      src: vibes2,
      thumbnail: vibes2,
    },
    {
      src: vibes3,
      thumbnail: vibes3,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes4,
      thumbnail: vibes4,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes5,
      thumbnail: vibes5,
    },
    {
      src: vibes6,
      thumbnail: vibes6,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes7,
      thumbnail: vibes7,
    },
    {
      src: vibes8,
      thumbnail: vibes8,
    },
    {
      src: vibes9,
      thumbnail: vibes9,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes10,
      thumbnail: vibes10,
    },
    {
      src: vibes11,
      thumbnail: vibes11,
    },
    {
      src: vibes12,
      thumbnail: vibes12,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes13,
      thumbnail: vibes13,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes14,
      thumbnail: vibes14,
    },
    {
      src: vibes15,
      thumbnail: vibes15,
    },
    {
      src: vibes16,
      thumbnail: vibes16,
    },
    {
      src: vibes17,
      thumbnail: vibes17,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: vibes18,
      thumbnail: vibes18,
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
        <div className="yoursContainerHome" onClick={redirectBackToYours}>
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

export default YoursVibes;
