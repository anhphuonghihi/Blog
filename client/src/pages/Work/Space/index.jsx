import { Text } from "@internals/components";
import styles from "./Space.module.scss";
import React from "react";
import { brown } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VG245611 from "../../../assets/VG2456-1-1.jpg";
import Scenario from "../../../assets/Scenario-Image_ViewBoard®-IFP60-Series_Video-Conference.jpg";
import Coffee from "../../../assets/Coffee-shop_Final.jpg"
import VG55 from "../../../assets/VG55-home-studio.jpg"
import IFP70_scenario_Video from "../../../assets/IFP70_scenario_Video.jpg"
import SC3_Auditorium02 from "../../../assets/SC3_Auditorium02.jpg"
import { Link } from "react-router-dom";
const Space = () => {
  const space = [
    {
      link: "/",
      image: VG245611,
      title: "Thiết lập một máy trạm hiệu suất cao",
      text: "Tối đa hóa năng suất mà không ảnh hưởng tới sự thoải mái khi sử dụng màn hình",
    },
    {
      link: "/",
      image: Scenario,
      title: "Thuyết trình không dây một cách đơn giản",
      text: "Chuẩn bị, trình bày và tham gia buổi họp với đầy đủ các giải pháp phần cứng và phần mềm tích hợp.",
    },
    {
      link: "/",
      image: Coffee,
      title: "Tối đa hóa năng suất khi đi công tác",
      text: "Làm việc bất cứ đâu. Giải pháp hình ảnh di động cho công việc của bạn",
    },
    {
      link: "/",
      image: VG55,
      title: "Tối ưu hóa góc làm việc tại nhà của bạn",
      text: "Thiết lập văn phòng tại nhà của bạn tránh bị làm phiền và để đạt hiệu suất cao",
    },
    {
      link: "/",
      image: IFP70_scenario_Video,
      title: "Phối hợp hiệu quả hơn",
      text: "Họp hiệu quả hơn với công cụ kĩ thuật số chuẩn",
    },
    {
      link: "/",
      image: SC3_Auditorium02,
      title: "Tạo ấn tượng với một khán giả",
      text: "Tạo ấn tượng lâu dài ở những địa điểm lớn với một màn hình Direct View LED siêu lớn",
    },
  ];
  return (
    <div className={styles["space"]}>
      <div className={styles["title"]}>
        <Text title="Giải Pháp Không Gian Làm Việc ViewSonic" />
      </div>
      <div className={styles["container"]}>
        {space.map((item, index) => (
          <Link to={item.link} className={styles["box"]}>
            <div className={styles["img"]}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles["text"]}>
              <h3>{item.title}</h3>
              <p>
                {item.text}
              </p>
              <span>
                Tìm hiểu thêm <ChevronRightIcon sx={{ color: brown[100] }} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Space;
