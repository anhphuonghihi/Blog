import { Text } from "@internals/components";
import styles from "./Offices.module.scss";
import React from "react";
const Offices = () => {
  return (
    <div>
      <div className={styles["title"]}>
        <Text
          title="Giải Pháp Cho Văn Phòng Chuyên Nghiệp "
          content="Các giải pháp trình chiếu của ViewSonic giúp giải quyết các yêu cầu trình chiếu trong mọi không gian và nâng cao khả năng giao tiếp."
        />
      </div>
    </div>
  );
};

export default Offices;
