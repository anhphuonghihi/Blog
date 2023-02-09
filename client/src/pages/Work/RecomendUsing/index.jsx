import { Box, Text, Title } from "@internals/components";
import React from "react";
import styles from "./RecomendUsing.module.scss";
import Viewboard01 from "../../../assets/viewboard-01.svg";
import lcd01 from "../../../assets/lcd-01.svg";
import pj201 from "../../../assets/pj2-01.svg";
import cde01 from "../../../assets/cde-01.svg";
import myvb01 from "../../../assets/myvb-01.svg";
const RecomendUsing = () => {
  const edu = [
    {
      link: "products/lcd/",
      img: Viewboard01,
      title: "Màn hình ViewBoard ",
      text: "Cộng tác tương tác trong tầm tay của bạn",
    },
    {
      link: "products/lcd/",
      img: lcd01,
      title: "Màn hình máy tính",
      text: "Màn hình máy tính để bàn lớn cho năng suất",
    },
    {
      link: "products/lcd/",
      img: pj201,
      title: "Máy chiếu",
      text: "Chiếu màn hình lớn trong bất kỳ môi trường",
    },
    {
      link: "products/lcd/",
      img: cde01,
      title: "Màn hình đa chức năng ",
      text: "Màn hình đảm nhận nhiều vai trò",
    },
    {
      link: "products/lcd/",
      img: myvb01,
      title: "myViewBoard",
      text: "Phần mềm trình chiếu đủ chức năng",
    },
  ];
  return (
    <div className={styles["background"]}>
      <Text title="Sản phẩm khuyên dùng" />
      <div className={styles["container"]}>
        {edu.map((item, index) => (
          <Box
            link={item.link}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default RecomendUsing;
