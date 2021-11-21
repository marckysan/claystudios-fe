import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: FC = () => {
  return (
    <header>
      <div className="navBar">
        <Link to="/">
          <img
            className="companyLogo"
            src={require("../../assets/images/clayStudiosLogo.png").default}
            alt="Company Logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
