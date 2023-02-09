
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
const Nav = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      console.log(window.scrollY);
      let windowHeight = window.scrollY;
      windowHeight > 120
        ? setStickyClass("fixed top-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };
  return (
    <div className={`navb ${stickyClass}`}>
      <div className={styles["row"]}>
        <div className={styles["left"]}>
          <Link to="/">Công việc</Link>
        </div>
        <div className={styles["right"]}>
          <div className={styles["nav"]}>
            <Link to="/about-viewsonic">Về ViewSonicc</Link>
          </div>
          <div className={styles["nav"]}>
            Giải Pháp Cho Văn Phòng <KeyboardArrowDownIcon />
          </div>
          <Link to="#vsLeadModal" className={"btn-nav"}>
            Liên hệ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
