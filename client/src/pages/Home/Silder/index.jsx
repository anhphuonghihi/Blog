import React from "react";
import { Link } from "react-router-dom";
import styles from "./Silder.module.scss";
import { Slideshow, Section, Button } from "uikit-react";
import X2000l from "../../../assets/x2000l-4k.png";
import Light from "../../../assets/light.png";
import Edu from "../../../assets/edu.png";
import Gaming from "../../../assets/gaming.png";
import { Card } from "@mui/material";
const slider = [
  {
    link: "/products/projectors/X2000L-4K",
    title: "X2000L-4K",
    background: X2000l,
    content: "Giải pháp cho Giáo dục Hiện đại",
  },
  {
    link: "/worldcup2022",
    title: "Top máy chiếu giải trí xem World Cup 2022",
    background: Light,
    content: "Khám Phá Sản Phẩm Máy Chiếu ViewSonic",
  },
  {
    link: "/education",
    title: "35 Năm Đổi Mới và Sáng Tạo",
    background: Edu,
    content: " Giải pháp cho Giáo dục Hiện đại",
  },
  {
    link: "/promos/xg2431",
    title: "XG2431 - Màn Hình Gaming 240hz",
    background: Edu,
    content:
      "*Khuyến mại: Tặng áo mưa Gaming Limited Edition từ 10/11/2022 cho đến khi hết quà.",
  },
];
const Slider = () => {
  return (
    <Section>
      <Slideshow
        navigationStyle="light"
        navigation={true}
        className={styles["show"]}
      >
        {slider.map((item, index) => (
          <Card>
            <Link to={item.link}>
              <div className={styles["row"]}>
                <div className={styles["left"]}>
                  <div className={styles["border"]}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                  <Button className={styles["uk-button-red"]}>Xem thêm</Button>
                </div>
                <img src={item.background} alt="" />
              </div>
            </Link>
          </Card>
        ))}
      </Slideshow>
      <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin">
        <li className="uk-active" uk-slideshow-item="0">
          <Link to="#"></Link>
        </li>
        <li uk-slideshow-item="1">
          <Link to="#"></Link>
        </li>
        <li uk-slideshow-item="2">
          <Link to="#"></Link>
        </li>
        <li uk-slideshow-item="3">
          <Link to="#"></Link>
        </li>
        <li uk-slideshow-item="4">
          <Link to="#"></Link>
        </li>
        <li uk-slideshow-item="5">
          <Link to="#"></Link>
        </li>
        <li uk-slideshow-item="6">
          <Link to="#"></Link>
        </li>
      </ul>
    </Section>
  );
};

export default Slider;
