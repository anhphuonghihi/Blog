import React from "react";
import styles from "./Text.module.scss";
const Text = ({ title, content }) => {
  return (
    <div className={styles["title"]}>
      <h3>{title}</h3>
      <h3>{content && <p>{content}</p>}</h3>
    </div>
  );
};

export default Text;
