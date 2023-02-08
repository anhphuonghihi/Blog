import React from "react";
import styles from "./Title.module.scss";
const Title = ({ title, content }) => {
  return (
    <div className={styles["title"]}>
      <h2>{title}</h2>
      <div className={styles["hr-line"]}></div>
      {content && <p>{content}</p>}
    </div>
  );
};

export default Title;
