import { Line } from "@internals/components";
import React from "react";
import { Helmet } from "react-helmet";
import About from "./About";
import EdTech from "./EdTech";
import Education from "./Education";
import MoveNumber from "./MoveNumber";
const Educations = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <About />
      <EdTech />
      <Education />
      <Line />
      <MoveNumber />
    </div>
  );
};

export default Educations;
