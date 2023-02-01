import React from "react";
import { Link } from "react-router-dom";
import styles from "./Silder.module.scss";
import { Slideshow, Section } from "uikit-react";
import X2000l from "../../../assets/x2000l-4k.png";
const slider = [
  {
    link: "/worldcup2022",
    background: X2000l,
  },
];
const Slider = () => {
  return (
    <Section>
      <Slideshow>
        <li>
          <Link to={slider[0].link}>
            <div className={styles["row"]}>
              {/* <div style={background}></div> */}
              <img src={X2000l} alt="" />
            </div>
          </Link>
        </li>
        <li></li>
      </Slideshow>
    </Section>
  );
};

export default Slider;
