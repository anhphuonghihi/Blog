import React from "react";
import { Helmet } from "react-helmet";
import Silder from "./Silder";
import RealSolution from "./RealSolution";
import Feature from "./Feature";
import Solutions from "./Solutions";
import Specifications from "./Specifications";
const Home = (props) => {
  const { title } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Silder />
      <Feature />
      <Solutions />
      <Specifications />
      <RealSolution />
    </div>
  );
};

export default Home;
