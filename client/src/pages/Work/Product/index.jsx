import { Box, Text } from "@internals/components";
import React from "react";
import styles from "./Product.module.scss";
import USB_C from "../../../assets/USB-C.svg";
import Webcam from "../../../assets/Webcam.svg";
import Performance from "../../../assets/Performance.svg";
import RefreshRate from "../../../assets/refresh-rate.svg";
import FramelessBezel from "../../../assets/Frameless-Bezel.svg";
import Portable from "../../../assets/Portable.svg";
import AllLED from "../../../assets/All-in-one-LED.svg";
import InteractiveDisplay from "../../../assets/Interactive-Display.svg";
import PortablePJ from "../../../assets/Portable-PJ.svg";
const Product = () => {
  const edu = [
    {
      link: "products/lcd/",
      img: USB_C,
      title: "USB-C / Dock",
    },
    {
      link: "products/lcd/",
      img: Webcam,
      title: "Webcam",
    },
    {
      link: "products/lcd/",
      img: Performance,
      title: "Màu sắc chân thật",
    },
    {
      link: "products/lcd/",
      img: RefreshRate,
      title: "Tần số quét cao",
    },
    {
      link: "products/lcd/",
      img: FramelessBezel,
      title: "Thiết kế không khung viền",
    },
    {
      link: "products/lcd/",
      img: Portable,
      title: "Di Động",
    },
    {
      link: "products/lcd/",
      img: AllLED,
      title: "All-in-One LED",
    },
    {
      link: "products/lcd/",
      img: InteractiveDisplay,
      title: "Màn hình tương tác",
    },
    {
      link: "products/lcd/",
      img: PortablePJ,
      title: "Máy chiếu",
    },
  ];
  return (
    <div>
      <Text title="Sản Phẩm Nổi Bật" />
      <div className={styles["container"]}>
        {edu.map((item, index) => (
          <Box link={item.link} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Product;
