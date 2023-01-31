import React from "react";
import { Helmet } from "react-helmet";
import Silder from "./Silder";
const Home = (props) => {
  const { title } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Silder />
    </div>
  );
};

export default Home;
