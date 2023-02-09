import { Title } from "@internals/components";
import React from "react";
import styles from "./MoveNumber.module.scss";
import New1 from "../../../assets/new1.png";
import New2 from "../../../assets/new2.png";
import New3 from "../../../assets/new3.png";
import { Link } from "react-router-dom";
const MoveNumber = () => {
  const move = [
    {
      title: "Giải pháp lớp học thông minh tại trường Ghaf Primary (UAE)",
      text: "CASE STUDY",
      img: New1,
      link: "/",
    },
    {
      title: "Chuyển đổi số tại trường North West London Jewish",
      text: "CASE STUDY",
      img: New2,
      link: "/",
    },
    {
      title:
        "ViewSonic tại triển lãm giáo dục BETT 2022: Ứng dụng công nghệ vào giảng dạy trong trạng thái bình Thường Mới",
      text: "TIN TỨC",
      img: New3,
      link: "/",
    },
  ];
  return (
    <div className={styles["container"]}>
      <Title
        title="Chuyển đổi số trong EdTech"
        content="Tìm hiểu thêm về ứng dụng các công nghệ ViewSonic trong giảng dạy"
      />
      <div className={styles["content"]}>
        {move.map((item, index) => (
          <Link to={item.link} className={styles["card"]}>
            <div className={styles["img"]}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles["text"]}>
              <div className={styles["title"]}>{item.title}</div>
              <div className={styles["bottom"]}>
                <div className={styles["left"]}> {item.text}</div>
                <div className={styles["right"]}>Tìm hiểu thêm</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoveNumber;
