import React from "react";
import { Helmet } from "react-helmet";
import Nav from "./Nav";
import About from "./About";
import Product from "./Product";
import Offices from "./Offices";
import Space from "./Space";
import Details from "./Details";
const Work = ({ title }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav />
      <About />
      <Product />
      <Offices />
      <Space/>
      <Details/>
    </div>
  );
};

export default Work;
