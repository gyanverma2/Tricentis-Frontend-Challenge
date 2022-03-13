import React from "react";

import { Header, Main, Footer, Tricentis } from "@components";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
      <Tricentis />
      <Footer />
    </div>
  );
};

export default Home;
