import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const ButtonWhite = ({ link, text }) => {
  return (
    <div>
      {link && (
        <Link to={link} className={styles["btn"]}>
          {text}
        </Link>
      )}
    </div>
  );
};

export default ButtonWhite;
