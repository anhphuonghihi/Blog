import { Text } from "@internals/components";
import styles from "./Details.module.scss";
import React from "react";
import LB0008 from "../../../assets/LB0008.jpg";
import LB0013 from "../../../assets/LB0013.jpg";
import LB0118 from "../../../assets/LB0118-01.jpg";
import LB0176 from "../../../assets/LB0176.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
const Details = () => {
  const details = [
    {
      title: "Bạn nên sử dụng màn hình Ultrawide hay 2 màn hình thông thường? ",
      img: LB0008,
      link: "/product",
    },
    {
      title: "Bạn nên sử dụng màn hình cong hay màn hình phẳng? ",
      img: LB0013,
      link: "/product",
    },
    {
      title: "Những màn hình bảo vệ mắt tốt nhất 2021",
      img: LB0118,
      link: "/product",
    },
    {
      title: "Tại sao bạn nên mua màn hình di động? ",
      img: LB0176,
      link: "/product",
    },
  ];
  return (
    <div className={styles["details"]}>
      <div className={styles["title"]}>
        <Text title="Thông tin chi tiết" />
      </div>
      <div className={styles["container"]}>
        {details.map((item, index) => (
          <Link to={item.link} className={styles["box"]}>
            <div>
              <div className={styles["img"]}>
                <img src={item.img} alt="" />
              </div>
              <h4 className={styles["text"]}>{item.title}</h4>
              <div className={styles["more"]}>
                Đọc thêm <ChevronRightIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Details;
