import React from "react";
import { Helmet } from "react-helmet";
import Nav from "./Nav";
import About from "./About";
import Product from "./Product";
import Offices from "./Offices";
import Space from "./Space";
import Details from "./Details";
import RecomendUsing from "./RecomendUsing";
import Email from "./Email";
import { Line, Navbar } from "@internals/components";
const Work = ({ title }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav />
      <About />
      <Product />
      <Line />
      <Offices />
      <Space />
      <Details />
      <RecomendUsing />
      <Email />
    </div>
  );
};

export default Work;
