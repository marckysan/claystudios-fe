import React, { FC } from "react";
import StackGrid from "react-stack-grid";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import useWindowDimensions from "../../utils/viewportDimensions/useWindowDimensions";
import "./yoursVibes.css";

const YoursVibes: FC = () => {
  const { width } = useWindowDimensions();
  const items = [
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/portfolio_project/item/fb2c3b4c11b074fd106b813a59e28928/grafika_01.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/portfolio_project/item/e00e49b37a234f981cca7da24ea91b3c/cover-01-01.png",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/portfolio_project/item/1fb148ca00b15989a61fc3479932b339/cover-01-02.png",
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
            <StackGrid columnWidth={width <= 768 ? "80%" : "33.33%"}>
              {items.map(({ img }, key) => (
                <div key={key} style={{ objectFit: "scale-down" }}>
                  <img src={img} alt="vibesImage" />
                </div>
              ))}
            </StackGrid>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YoursVibes;
