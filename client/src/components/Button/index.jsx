import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const Button = ({ link, text }) => {
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

export default Button;
