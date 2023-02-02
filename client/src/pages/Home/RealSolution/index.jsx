import React from "react";
import { Link } from "react-router-dom";
import {
  Slideshow,
  Section,
  Card,
  CardBody,
  Image,
  CardTitle,
  Container,
  Button,
} from "uikit-react";
import styles from "./RealSolution.module.scss";
import LeDucTho from "../../../assets/Case-Study-Le-Duc-Tho.jpg";
import LeQuyDon from "../../../assets/Case-Study-Le-Quy-Don.jpg";
import Img2022 from "../../../assets/2022.png";
import GFSV from "../../../assets/GymnasiumSchlosHeessen_Fallstudie_CaseStudy_ViewSonic_15-2.png";
import Elmp from "../../../assets/elmp.jpg";
import Image1637595110171 from "../../../assets/1637595110171.jpg";
const solution = [
  [
    {
      link: "/home",
      img: LeDucTho,
      title:
        "Ứng dụng công nghệ vào giảng dạy tại Trường Tiểu Học Lê Đức Thọ với myViewBoard",
    },
    {
      link: "/home",
      img: LeQuyDon,
      title: "Sử dụng màn hình tương tác ViewSonic ViewBoard trong giảng dạy",
    },
    {
      link: "/home",
      img: Img2022,
      title:
        "Mô hình phòng học thông minh ViewSonic tại Sự kiện Ngày chuyển đổi số tỉnh Hải Dương năm 2022",
    },
  ],
  [
    {
      link: "/home",
      img: GFSV,
      title:
        "ViewSonic Implements Future-Proof teaching at Schloß Heessen School",
    },
    {
      link: "/home",
      img: Elmp,
      title:
        "ViewSonic’s ViewBoard for interactive guided tours at the Hellenic IT Museum ",
    },
    {
      link: "/home",
      img: Image1637595110171,
      title: "ViewSonic Implements Hybrid Learning in Akadimos",
    },
  ],
];
const RealSolution = () => {
  return (
    <Section className="readsolution">
      <Container size="expand" className={styles["readsolution-background"]}>
        <div className={styles["readsolution-title"]}>
          <h2>Giải pháp thực tế</h2>
        </div>
        <div className={styles["readsolution-body"]}>
          <Slideshow
            navigationStyle="light"
            navigation={true}
            className={styles["show"]}
          >
            {solution.map((items, index) => {
              return (
                <li className={styles["readsolution-card"]}>
                  {items.map((item, index) => {
                    return (
                      <Link to={item.link} key={index}>
                        <Card hover>
                          <Image
                            src={item.img}
                            alt="image"
                            width="620px"
                            height="320px"
                          />
                          <CardBody>
                            <CardTitle className={styles["uk-card-title"]}>
                              {item.title}
                            </CardTitle>
                            <Button className={styles["uk-button-default"]}>
                              Xem thêm
                            </Button>
                          </CardBody>
                        </Card>
                      </Link>
                    );
                  })}
                </li>
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
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default RealSolution;
