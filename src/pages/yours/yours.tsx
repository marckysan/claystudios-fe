import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import punggolWalk from "../../assets/images/308PunggolWalk.png";
import domain21 from "../../assets/images/domain21.png";
import floralvale from "../../assets/images/floralvale.png";
import tamanSelamat from "../../assets/images/tamanSelamat.png";
import vibesAtEastCoast from "../../assets/images/vibesAtEastCoast.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ProjectCard from "../../components/projectCard/projectCard";
import useWindowDimensions from "../../utils/viewportDimensions/useWindowDimensions";
import "./yours.css";

const Yours: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { width } = useWindowDimensions();

  console.log(width);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

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
        <div className="rightSection">
          <Container fluid style={{ paddingBottom: "3vw" }}>
            {width > 1000 ? (
              <div>
                <Row debug align="center" justify="center" direction="row">
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={vibesAtEastCoast}
                      name="Vibes @ East Coast"
                      link="/"
                    ></ProjectCard>
                  </Col>
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={floralvale}
                      name="The Floralvale"
                      link="/"
                    ></ProjectCard>
                  </Col>
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={tamanSelamat}
                      name="Taman Selamat"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <br />
                <Row debug align="center" justify="center" direction="row">
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      paddingLeft: "10%",
                    }}
                  >
                    <ProjectCard
                      img={domain21}
                      name="Domain 21"
                      link="/"
                    ></ProjectCard>
                  </Col>
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={punggolWalk}
                      name="308B Punggol Walk"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
              </div>
            ) : width < 1000 && width > 667 ? (
              <div>
                <Row debug align="center" justify="center" direction="row">
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={vibesAtEastCoast}
                      name="Vibes @ East Coast"
                      link="/"
                    ></ProjectCard>
                  </Col>
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={floralvale}
                      name="The Floralvale"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <br />
                <Row debug align="center" justify="center" direction="row">
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                    }}
                  >
                    <ProjectCard
                      img={tamanSelamat}
                      name="Taman Selamat"
                      link="/"
                    ></ProjectCard>
                  </Col>
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={domain21}
                      name="Domain 21"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <Row
                  debug
                  align="center"
                  justify="center"
                  direction="row"
                  style={{ marginTop: "2vw" }}
                >
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      paddingLeft: "30%",
                    }}
                  >
                    <ProjectCard
                      img={punggolWalk}
                      name="308B Punggol Walk"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
              </div>
            ) : (
              <div>
                <Row debug align="center" justify="center" direction="row">
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={vibesAtEastCoast}
                      name="Vibes @ East Coast"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <Row
                  debug
                  align="center"
                  justify="center"
                  direction="row"
                  style={{ marginTop: "2vw" }}
                >
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={floralvale}
                      name="The Floralvale"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <Row
                  debug
                  align="center"
                  justify="center"
                  direction="row"
                  style={{ marginTop: "2vw" }}
                >
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={tamanSelamat}
                      name="Taman Selamat"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <Row
                  debug
                  align="center"
                  justify="center"
                  direction="row"
                  style={{ marginTop: "2vw" }}
                >
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={domain21}
                      name="Domain 21"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
                <Row
                  debug
                  align="center"
                  justify="center"
                  direction="row"
                  style={{ marginTop: "2vw" }}
                >
                  <Col
                    debug
                    style={{
                      outline: "none",
                      background: "white",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectCard
                      img={punggolWalk}
                      name="308B Punggol Walk"
                      link="/"
                    ></ProjectCard>
                  </Col>
                </Row>
              </div>
            )}
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Yours;
