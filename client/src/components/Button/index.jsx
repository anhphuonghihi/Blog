import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const Button = ({ link, text }) => {
  return (
    <Link to={link} className={styles["btn"]}>
      {text}
    </Link>
  );
};

export default Button;
