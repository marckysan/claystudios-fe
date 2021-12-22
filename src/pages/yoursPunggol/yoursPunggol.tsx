import React, { FC } from "react";
import Gallery from "react-grid-gallery";
import punggolWalk1 from "../../assets/images/308BPunggolWalk/punggolWalk1.jpg";
import punggolWalk2 from "../../assets/images/308BPunggolWalk/punggolWalk2.jpg";
import punggolWalk3 from "../../assets/images/308BPunggolWalk/punggolWalk3.jpg";
import punggolWalk4 from "../../assets/images/308BPunggolWalk/punggolWalk4.jpg";
import punggolWalk5 from "../../assets/images/308BPunggolWalk/punggolWalk5.jpg";
import punggolWalk6 from "../../assets/images/308BPunggolWalk/punggolWalk6.jpg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursPunggol.css";

const YoursPunggol: FC = () => {
  const items = [
    {
      src: punggolWalk1,
      thumbnail: punggolWalk1,
    },
    {
      src: punggolWalk2,
      thumbnail: punggolWalk2,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: punggolWalk3,
      thumbnail: punggolWalk3,
    },
    {
      src: punggolWalk4,
      thumbnail: punggolWalk4,
    },
    {
      src: punggolWalk5,
      thumbnail: punggolWalk5,
    },
    {
      src: punggolWalk6,
      thumbnail: punggolWalk6,
    },
  ];

  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <Header />
      <div className="centerSection">
        <div className="yoursContainerHome">
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yours"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="rightSection">
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

export default YoursPunggol;
