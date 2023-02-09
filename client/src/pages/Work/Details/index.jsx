import { Text } from "@internals/components";
import styles from "./Details.module.scss";
import React from "react";
const Details = () => {
  return (
    <div>
      <div className={styles["title"]}>
        <Text
          title="Thông tin chi tiết"
        />
      </div>
    </div>
  );
};

export default Details;
