import React, { FC, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Seek: FC = () => {
  useEffect(() => {
    document.title = "seek";
  }, []);

  return (
    <div>
      <Header />
      Seek
      <Footer />
    </div>
  );
};

export default Seek;
