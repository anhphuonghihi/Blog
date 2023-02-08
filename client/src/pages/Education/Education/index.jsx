import { Box, Title } from "@internals/components";
import React from "react";
import styles from "./Education.module.scss";
import Monitors from "../../../assets/Icon1-Multipurpose-Monitors.svg";
import Projectors from "../../../assets/Icon2-Picture-perfect-Projectors.svg";
import Displays from "../../../assets/Icon-3-Intuitive-Pen-Displays.svg";
import LEDs from "../../../assets/Icon4-Premium-Direct-View-LEDs.svg";
import Accessories from "../../../assets/Icon5-Additional-Accessories.svg";
const Education = () => {
  const edu = [
    {
      link: "products/lcd/",
      img: Monitors,
      title: "Màn Hình Máy Tính",
    },
    {
      link: "products/lcd/",
      img: Projectors,
      title: "Máy Chiếu",
    },
    {
      link: "products/lcd/",
      img: Displays,
      title: "Bảng Viết Kỹ Thuật Số",
    },
    {
      link: "products/lcd/",
      img: LEDs,
      title: "Màn hình Direct View LED",
    },
    {
      link: "products/lcd/",
      img: Accessories,
      title: "Phụ Kiện",
    },
  ];
  return (
    <div className={styles["background"]}>
      <Title title="Khám Phá Các Sản Phẩm Cho Giáo Dục" />
      <div className={styles["container"]}>
        {edu.map((item, index) => (
          <Box link={item.link} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Education;
