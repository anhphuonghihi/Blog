import React from "react";
import { Section } from "uikit-react";
import styles from "./Solutions.module.scss";
import Encourage13 from "../../../assets/Encourage-13.png";
import Banner_viewboard from "../../../assets/banner_viewboard.png";
import Home from "../../../assets/frontpage-home.png";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Solutions = () => {
  const solutions = [
    {
      link: "/education",
      img: Encourage13,
      title: "Giáo dục",
      text: "Giải pháp giáo dục toàn diện của công ty hàng đầu trong lĩnh vực EdTech.",
    },
    {
      link: "/work",
      img: Banner_viewboard,
      title: "Doanh Nghiệp",
      text: "Giải pháp nâng cao năng suất tương tác và hơp tác cho nhân viên.",
    },
    {
      link: "/home",
      img: Home,
      title: "Gia Đình",
      text: "Các giải pháp trình chiếu cho giải trí gia đình.",
    },
  ];
  return (
    <Section>
      <div className={styles["flex"]}>
        <div className={styles["col-12"]}>
          <h3>Giải pháp cho Học tập, làm việc và vui chơi</h3>
        </div>
        {solutions.map((item, index) => (
          <Link to={item.link} className={styles["col-4"]}>
            <div className={styles["img"]}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles["content"]}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
            <div className={styles["more"]}>
              <span>
                Xem thêm
                <KeyboardArrowRightIcon style={{ marginLeft: "10" }} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Solutions;
