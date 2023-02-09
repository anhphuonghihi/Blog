import { Line } from "@internals/components";
import React from "react";
import { Helmet } from "react-helmet";
import About from "./About";
import EdTech from "./EdTech";
import Education from "./Education";
import MoveNumber from "./MoveNumber";
import Video from "./Video";
import Email from "./Email";
const Educations = ({ title }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Video />
      <Email />
    </div>
  );
};

export default Educations;
