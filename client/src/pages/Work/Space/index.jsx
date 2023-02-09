import { Text } from "@internals/components";
import styles from "./Space.module.scss";
import React from "react";
const Space = () => {
  return (
    <div>
      <div className={styles["title"]}>
        <Text
          title="Giải Pháp Không Gian Làm Việc ViewSonic"
        />
      </div>
    </div>
  );
};

export default Space;
