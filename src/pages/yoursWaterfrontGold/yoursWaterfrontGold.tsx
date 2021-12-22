import React, { FC, useState } from "react";
import Gallery from "react-grid-gallery";
import { useHistory } from "react-router";
import waterfront1 from "../../assets/images/waterfrontGold/waterfront1.jpg";
import waterfront10 from "../../assets/images/waterfrontGold/waterfront10.jpg";
import waterfront11 from "../../assets/images/waterfrontGold/waterfront11.jpg";
import waterfront12 from "../../assets/images/waterfrontGold/waterfront12.jpg";
import waterfront2 from "../../assets/images/waterfrontGold/waterfront2.jpg";
import waterfront3 from "../../assets/images/waterfrontGold/waterfront3.jpg";
import waterfront4 from "../../assets/images/waterfrontGold/waterfront4.jpg";
import waterfront5 from "../../assets/images/waterfrontGold/waterfront5.jpg";
import waterfront6 from "../../assets/images/waterfrontGold/waterfront6.jpg";
import waterfront7 from "../../assets/images/waterfrontGold/waterfront7.jpg";
import waterfront8 from "../../assets/images/waterfrontGold/waterfront8.jpg";
import waterfront9 from "../../assets/images/waterfrontGold/waterfront9.jpg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursWaterfrontGold.css";

declare var require: any;

const YoursWaterfrontGold: FC = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const items = [
    {
      src: waterfront1,
      thumbnail: waterfront1,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront2,
      thumbnail: waterfront2,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront3,
      thumbnail: waterfront3,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront4,
      thumbnail: waterfront4,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront5,
      thumbnail: waterfront5,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront6,
      thumbnail: waterfront6,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront7,
      thumbnail: waterfront7,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront8,
      thumbnail: waterfront8,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront9,
      thumbnail: waterfront9,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront10,
      thumbnail: waterfront10,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront11,
      thumbnail: waterfront11,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: waterfront12,
      thumbnail: waterfront12,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
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
          {" "}
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

export default YoursWaterfrontGold;
