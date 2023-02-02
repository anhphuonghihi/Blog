import React from "react";
import { Section, Container, Flex } from "uikit-react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import styles from "./Feature.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import lcd from "../../../assets/lcd.svg";
import pj2 from "../../../assets/pj2.svg";
import viewboard2 from "../../../assets/viewboard-2.svg";
import cde from "../../../assets/cde.svg";
import myvb from "../../../assets/myvb.svg";
import pd from "../../../assets/pd.svg";
const feature = [
  {
    id: 1,
    img: lcd,
    text: "Đa dạng kích thước",
    title: "Đa dạng kích thước",
    link: "/products/lcd/",
  },
  {
    id: 2,
    img: pj2,
    text: "Tải ứng dụng dễ dàng",
    title: "Tải ứng dụng dễ dàng",
    link: "/products/projectors/",
  },
  {
    id: 3,
    img: viewboard2,
    text: "Chế độ bảng viết",
    title: "Chế độ bảng viết",
    link: "/products/viewboard/?f_app=ViewBoard",
  },
  {
    id: 4,
    img: cde,
    text: "Truy cập Internet",
    title: "Truy cập Internet",
    link: "/products/commercial-display/",
  },
  {
    id: 5,
    img: myvb,
    text: "Chia sẻ, kết nối không dây",
    title: "Chia sẻ, kết nối không dây",
    link: "/myviewboard",
  },
  {
    id: 6,
    img: pd,
    text: "Chia sẻ dữ liệu nhanh chóng",
    title: "Chia sẻ dữ liệu nhanh chóng",
    link: "/products/pendisplay/",
  },
];
const Feature = () => {
  return (
    <Section className={styles["feature"]}>
      <Container>
        <Flex className={styles["flex"]}>
          {feature.map((item, index) => (
            <div className={styles["content"]}>
              <Link to={item.link}>
                <OverlayTrigger
                  key={"top"}
                  placement={"top"}
                  overlay={<Tooltip id={`tooltip-top`}>{item.title}</Tooltip>}
                >
                  <div className={styles["content-img"]}>
                    <img src={item.img} alt="" />
                    <span>{item.text}</span>
                  </div>
                </OverlayTrigger>
              </Link>
            </div>
          ))}
        </Flex>
      </Container>
    </Section>
  );
};

export default Feature;
