import React from "react";
import { Link } from "react-router-dom";
import styles from "./Silder.module.scss";
import { Slideshow, Section, Button } from "uikit-react";
import X2000l from "../../../assets/x2000l-4k.png";
import Light from "../../../assets/light.png";
import Edu from "../../../assets/edu.png";
import Gaming from "../../../assets/gaming.png";
import Home from "../../../assets/home.png";
import M1Pro from "../../../assets/M1Pro-bg.png";
import Vp2776BG from "../../../assets/vp2776-bg.png";
import Vp2776I1 from "../../../assets/vp2776-icon.png";
import Vp2776I2 from "../../../assets/vp2776.png";
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
    background: Gaming,
    content:
      "*Khuyến mại: Tặng áo mưa Gaming Limited Edition từ 10/11/2022 cho đến khi hết quà.",
  },
  {
    link: "/products/projectors/M1%20Pro",
    title: "M1 Pro",
    background: M1Pro,
    content: "Máy chiếu LED di động 360 độ",
  },
  {
    link: "/reimagineyourspace",
    title: "Giải Phóng Không Gian Của Bạn",
    background: Home,
    content: "Máy chiếu ViewSonic.",
  },
  {
    link: "/products/lcd/VP2776",
    title: "ColorPro VP2776",
    background: Vp2776BG,
    content: "Khơi Nguồn Cảm Hứng",
    img1: Vp2776I1,
    img2: Vp2776I2,
  },
];
const Slider = () => {
  return (
    <Section style={{ padding: 20 }}>
      <Slideshow
        navigationStyle="light"
        navigation={true}
        className={styles["show"]}
      >
        {slider.map((item, index) => {
          if (index === 4) {
            return (
              <Card
                key={index}
                className={styles["m1"]}
                style={{ backgroundImage: `url(${item.background})` }}
              >
                <Link to={item.link}>
                  <h1 className={styles["big"]}>
                    <span>{item.title}</span> <br />
                    {item.content}
                  </h1>
                </Link>
              </Card>
            );
          } else if (index === 6) {
            return (
              <Card
                key={index}
                className={styles["vp"]}
                style={{ backgroundImage: `url(${item.background})` }}
              >
                <Link to={item.link} className={styles["link"]}>
                  <img src={item.img2} alt="" />
                  <h1 className={styles["big"]}>
                    <span>{item.title}</span> <br />
                    {item.content} <br />
                    <img src={item.img1} alt="" width="300px" />
                  </h1>
                </Link>
              </Card>
            );
          } else
            return (
              <Card key={index}>
                <Link to={item.link}>
                  <div className={styles["row"]}>
                    <div className={styles["left"]}>
                      <div className={styles["border"]}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                      </div>
                      <Button className={styles["uk-button-red"]}>
                        Xem thêm
                      </Button>
                    </div>
                    <img src={item.background} alt="" />
                  </div>
                </Link>
              </Card>
            );
        })}
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
