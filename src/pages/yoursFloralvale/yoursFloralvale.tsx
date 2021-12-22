import React, { FC } from "react";
import Gallery from "react-grid-gallery";
import floralvale1 from "../../assets/images/floralvale/floralvale1.jpg";
import floralvale2 from "../../assets/images/floralvale/floralvale2.jpg";
import floralvale3 from "../../assets/images/floralvale/floralvale3.jpg";
import floralvale4 from "../../assets/images/floralvale/floralvale4.jpg";
import floralvale5 from "../../assets/images/floralvale/floralvale5.jpg";
import floralvale6 from "../../assets/images/floralvale/floralvale6.jpg";
import floralvale7 from "../../assets/images/floralvale/floralvale7.jpg";
import floralvale8 from "../../assets/images/floralvale/floralvale8.jpg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursFloralvale.css";

const YoursFloralvale: FC = () => {
  const items = [
    {
      src: floralvale1,
      thumbnail: floralvale1,
    },
    {
      src: floralvale2,
      thumbnail: floralvale2,
    },
    {
      src: floralvale3,
      thumbnail: floralvale3,
    },
    {
      src: floralvale4,
      thumbnail: floralvale4,
    },
    {
      src: floralvale5,
      thumbnail: floralvale5,
    },
    {
      src: floralvale6,
      thumbnail: floralvale6,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: floralvale7,
      thumbnail: floralvale7,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: floralvale8,
      thumbnail: floralvale8,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
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

export default YoursFloralvale;
