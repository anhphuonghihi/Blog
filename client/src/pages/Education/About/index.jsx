import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Button } from "@internals/components";
import styles from "./About.module.scss";
import { useWindowSize } from "@internals/hooks";
const About = () => {
  const [width, setWidth] = useState(1000);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 1000 && size.width < 1464) {
      setWidth(size.width - 464);
    }
    if (size.width < 1000) {
      setWidth(size.width);
    }
  }, [size]);

  return (
    <div>
      <div className={styles["flex"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>GIẢI PHÁP GIÁO DỤC VIEWSONIC</div>
          <h2>35 Năm Đổi Mới và Sáng Tạo</h2>
          <div className={styles["content"]}>
            Đổi mới và sáng tạo trong giáo dục là điều mà ViewSonic Education
            hướng tới. Chúng tôi tự tin rằng với hệ sinh thái toàn diện bao gồm
            các thiết bị trình chiếu và phần mềm myViewBoard, giáo viên và học
            sinh sẽ vượt qua mọi khó khăn về không gian, thời gian để tăng khả
            năng giao tiếp, tương tác và nâng cao kết quả học tập.
          </div>
          <Button link="/#vsEduInquiryModal" text="ĐẶT LỊCH TƯ VẤN SẢN PHẨM" />
        </div>
        <YouTube
          opts={{
            width,
            height: width * (9 / 16),
          }}
          videoId={"S4kHc8ibC1g"}
          className={styles["youtobe"]}
        />
      </div>
    </div>
  );
};

export default About;
