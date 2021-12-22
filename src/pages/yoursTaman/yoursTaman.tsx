import React, { FC } from "react";
import Gallery from "react-grid-gallery";
import tamanSelamat1 from "../../assets/images/tamanSelamat/tamanSelamat1.jpg";
import tamanSelamat10 from "../../assets/images/tamanSelamat/tamanSelamat10.jpg";
import tamanSelamat11 from "../../assets/images/tamanSelamat/tamanSelamat11.jpg";
import tamanSelamat12 from "../../assets/images/tamanSelamat/tamanSelamat12.jpg";
import tamanSelamat13 from "../../assets/images/tamanSelamat/tamanSelamat13.jpg";
import tamanSelamat14 from "../../assets/images/tamanSelamat/tamanSelamat14.jpg";
import tamanSelamat15 from "../../assets/images/tamanSelamat/tamanSelamat15.jpg";
import tamanSelamat16 from "../../assets/images/tamanSelamat/tamanSelamat16.jpg";
import tamanSelamat17 from "../../assets/images/tamanSelamat/tamanSelamat17.jpg";
import tamanSelamat18 from "../../assets/images/tamanSelamat/tamanSelamat18.jpg";
import tamanSelamat19 from "../../assets/images/tamanSelamat/tamanSelamat19.jpg";
import tamanSelamat2 from "../../assets/images/tamanSelamat/tamanSelamat2.jpg";
import tamanSelamat20 from "../../assets/images/tamanSelamat/tamanSelamat20.jpg";
import tamanSelamat21 from "../../assets/images/tamanSelamat/tamanSelamat21.jpg";
import tamanSelamat22 from "../../assets/images/tamanSelamat/tamanSelamat22.jpg";
import tamanSelamat23 from "../../assets/images/tamanSelamat/tamanSelamat23.jpg";
import tamanSelamat24 from "../../assets/images/tamanSelamat/tamanSelamat24.jpg";
import tamanSelamat25 from "../../assets/images/tamanSelamat/tamanSelamat25.jpg";
import tamanSelamat26 from "../../assets/images/tamanSelamat/tamanSelamat26.jpg";
import tamanSelamat27 from "../../assets/images/tamanSelamat/tamanSelamat27.jpg";
import tamanSelamat28 from "../../assets/images/tamanSelamat/tamanSelamat28.jpg";
import tamanSelamat29 from "../../assets/images/tamanSelamat/tamanSelamat29.jpg";
import tamanSelamat3 from "../../assets/images/tamanSelamat/tamanSelamat3.jpg";
import tamanSelamat4 from "../../assets/images/tamanSelamat/tamanSelamat4.jpg";
import tamanSelamat5 from "../../assets/images/tamanSelamat/tamanSelamat5.jpg";
import tamanSelamat6 from "../../assets/images/tamanSelamat/tamanSelamat6.jpg";
import tamanSelamat7 from "../../assets/images/tamanSelamat/tamanSelamat7.jpg";
import tamanSelamat8 from "../../assets/images/tamanSelamat/tamanSelamat8.jpg";
import tamanSelamat9 from "../../assets/images/tamanSelamat/tamanSelamat9.jpg";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./yoursTaman.css";

const YoursTaman: FC = () => {
  const items = [
    {
      src: tamanSelamat1,
      thumbnail: tamanSelamat1,
    },
    {
      src: tamanSelamat2,
      thumbnail: tamanSelamat2,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat3,
      thumbnail: tamanSelamat3,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat4,
      thumbnail: tamanSelamat4,
    },
    {
      src: tamanSelamat5,
      thumbnail: tamanSelamat5,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat6,
      thumbnail: tamanSelamat6,
    },
    {
      src: tamanSelamat7,
      thumbnail: tamanSelamat7,
    },
    {
      src: tamanSelamat8,
      thumbnail: tamanSelamat8,
    },
    {
      src: tamanSelamat9,
      thumbnail: tamanSelamat9,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat10,
      thumbnail: tamanSelamat10,
    },
    {
      src: tamanSelamat11,
      thumbnail: tamanSelamat11,
    },
    {
      src: tamanSelamat12,
      thumbnail: tamanSelamat12,
    },
    {
      src: tamanSelamat13,
      thumbnail: tamanSelamat13,
    },
    {
      src: tamanSelamat14,
      thumbnail: tamanSelamat14,
    },
    {
      src: tamanSelamat15,
      thumbnail: tamanSelamat15,
    },
    {
      src: tamanSelamat16,
      thumbnail: tamanSelamat16,
    },
    {
      src: tamanSelamat17,
      thumbnail: tamanSelamat17,
    },
    {
      src: tamanSelamat18,
      thumbnail: tamanSelamat18,
    },
    {
      src: tamanSelamat19,
      thumbnail: tamanSelamat19,
    },
    {
      src: tamanSelamat20,
      thumbnail: tamanSelamat20,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat21,
      thumbnail: tamanSelamat21,
    },
    {
      src: tamanSelamat22,
      thumbnail: tamanSelamat22,
    },
    {
      src: tamanSelamat23,
      thumbnail: tamanSelamat23,
    },
    {
      src: tamanSelamat24,
      thumbnail: tamanSelamat24,
    },
    {
      src: tamanSelamat25,
      thumbnail: tamanSelamat25,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat26,
      thumbnail: tamanSelamat26,
      thumbnailWidth: 180,
      thumbnailHeight: 150,
    },
    {
      src: tamanSelamat27,
      thumbnail: tamanSelamat27,
    },
    {
      src: tamanSelamat28,
      thumbnail: tamanSelamat28,
    },
    {
      src: tamanSelamat29,
      thumbnail: tamanSelamat29,
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

export default YoursTaman;
