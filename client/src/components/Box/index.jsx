import React from "react";
import { Link } from "react-router-dom";
import styles from "./Box.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const index = ({ title ,link,img}) => {
  return (
    <Link to={link} className={styles["box"]}>
      <div>
        <div className={styles["img"]}>
          <img src={img} alt="" />
        </div>
        <h4 className={styles["text"]}>{title}</h4>
        <div className={styles["more"]}>
          Đọc thêm <ChevronRightIcon />
        </div>
      </div>
    </Link>
  );
};

export default index;
