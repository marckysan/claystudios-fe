import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import StackGrid from "react-stack-grid";
import punggolWalk from "../../assets/images/308PunggolWalk.png";
import domain21 from "../../assets/images/domain21.png";
import floralvale from "../../assets/images/floralvale.png";
import tamanSelamat from "../../assets/images/tamanSelamat.png";
import vibesAtEastCoast from "../../assets/images/vibesAtEastCoast.png";
import waterfrontGold from "../../assets/images/waterfrontGold.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ProjectCard from "../../components/projectCard/projectCard";
import useWindowDimensions from "../../utils/viewportDimensions/useWindowDimensions";
import "./yours.css";

const Yours: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useWindowDimensions();
  const history = useHistory();

  const items = [
    {
      img: vibesAtEastCoast,
      name: "Vibes @ East Coast",
      link: "vibesAtEastCoast",
    },
    { img: floralvale, name: "The Floralvale", link: "floralvale" },
    { img: tamanSelamat, name: "Taman Selamat", link: "tamanSelamat" },
    { img: domain21, name: "Domain 21", link: "domain21" },
    { img: punggolWalk, name: "308B Punggol Walk", link: "308BPunggolWalk" },
    { img: waterfrontGold, name: "Waterfront Gold", link: "waterfrontGold" },
  ];

  useEffect(() => {
    document.title = "yours";
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const redirect = (link: string) => {
    setIsClicked(true);
    setTimeout(() => {
      history.push(`/yours/${link}`);
    }, 800);
  };

  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <div className="homeSection" style={{ position: "absolute" }}>
        <div className="yoursContainerYours">
          <img
            className="yoursImageHome"
            src={require("../../assets/images/yoursImage.png").default}
            alt="yoursImage"
          />
          <p className="yoursText">yours</p>
        </div>
        <div className="seekContainerYours">
          <img
            className="seekImageHome"
            src={require("../../assets/images/seekImage.png").default}
            alt="seekImage"
          />
          <p className="seekText">seek</p>
        </div>
        <div className="usContainerYours">
          <img
            className="usImageHome"
            src={require("../../assets/images/usImage.png").default}
            alt="usImage"
          />
          <p className="usText">us</p>
        </div>
        <div className="meetContainerYours">
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
  ) : (
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
          <StackGrid
            columnWidth={
              width <= 667 && width > 320
                ? "50%"
                : width <= 320
                ? "80%"
                : "33.33%"
            }
            gutterHeight={10}
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {items.map(({ img, name, link }, key) => (
              <div
                key={key}
                onClick={() => redirect(link)}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <ProjectCard img={img} name={name} />
              </div>
            ))}
          </StackGrid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Yours;
