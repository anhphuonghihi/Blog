import { ButtonWhite, Text } from "@internals/components";
import styles from "./Offices.module.scss";
import React from "react";

import VGIB__2154 from "../../../assets/29-VGIB__2154_v2-main.jpg";
import VGIB__2155 from "../../../assets/15-VGIB__0968_v2-main.jpg";
import IFP70_web03_1 from "../../../assets/IFP70_web03_1.jpg";

const Offices = () => {
  const office = [
    {
      title: "WorkPro",
      text: " Dòng sản phẩm màn hình ViewSonic WorkPro được thiết kế chuyên dụng để giúp nâng cao hiệu suất làm việc của người dùng.",
      btn1Link: "/global/products/lcd/?f_series=VG+-+Corporate",
      btn1Text: "Xem dòng sản phẩm WorkPro",
      btn2Link: "/global/products/lcd/?f_series=VG+-+Corporate",
      btn2Text: "TẢI XUỐNG DANH MỤC WORKPRO VG",
      img: VGIB__2154,
    },
    {
      title: "Màn Hình Cảm ứng",
      text: " Màn hình cảm ứng TD Series của ViewSonic là công cụ cộng tác ở quy mô cá nhân. Chúng tôi luôn làm việc cùng nhau để phát triển, ngay cả màn hình của chúng tôi cũng cần phải thích ứng với nhu cầu hiện đại.",
      btn1Link: "touch/touchscreen-monitor",
      btn1Text: "Dòng Sản Phẩm Màn Hình Cảm Ứng ",
      btn2Link: "global/products/lcd/vTouch%20Driver%20for%20Mac%20Users",
      btn2Text: "Trình điều khiển vTouch cho người dùng Mac",
      img: VGIB__2155,
    },
    {
      title: "ViewBoard",
      text: "ViewSonic’s ViewBoard 70 Series là một bộ sưu tập các màn hình tương tác khổ lớn, lý tưởng cho việc giao tiếp và cộng tác ở bất cứ đâu. Từ phòng họp đến văn phòng điều hành và khán phòng, ViewBoards là một giải pháp trực quan toàn diện về phần cứng và phần mềm.",
      btn1Link: "/products/viewboard/?f_pline_en_name=ViewBoard",
      btn1Text: "Tìm Hiểu Về ViewBoard",
      img: IFP70_web03_1,
    },
  ];
  return (
    <div>
      <div className={styles["title"]}>
        <Text
          title="Giải Pháp Cho Văn Phòng Chuyên Nghiệp "
          content="Các giải pháp trình chiếu của ViewSonic giúp giải quyết các yêu cầu trình chiếu trong mọi không gian và nâng cao khả năng giao tiếp."
        />
      </div>
      {office.map((item, index) => (
        <div className={styles["content"]} key={index}>
          <div className={styles["text"]}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <ButtonWhite link={item.btn1Link} text={item.btn1Text} icon />
            <ButtonWhite link={item.btn2Link} text={item.btn2Text} icon />
          </div>
          <div className={styles["image"]}>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offices;
