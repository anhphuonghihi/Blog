import React from "react";
import { Helmet } from "react-helmet";
import Silder from "./Silder";
import RealSolution from "./RealSolution";
import Feature from "./Feature";
const Home = (props) => {
  const { title } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Silder />
      <Feature />
      <RealSolution />
    </div>
  );
};

export default Home;
