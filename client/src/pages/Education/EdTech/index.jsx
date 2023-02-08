import { CustomCarousel, Title } from "@internals/components";
import styles from "./EdTech.module.scss";
import React from "react";
const EdTech = () => {
  return (
    <div className={styles["background"]}>
      <Title
        title="Tích Hợp EdTech"
        content="Thu hút học sinh, bài giảng sáng tạo và nâng cao kết quả học tập."
      />
      <CustomCarousel />
    </div>
  );
};
export default EdTech;
