import React from "react";
import { Helmet } from "react-helmet";
import Silder from "./Silder";
import RealSolution from "./RealSolution";
const Home = (props) => {
  const { title } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Silder />
      <RealSolution/>
    </div>
  );
};

export default Home;
