import { useWindowSize } from "@internals/hooks";
import React from "react";
import styles from "./Specifications.module.scss";

const Specifications = () => {
  const specifications = [
    {
      id: "01",
      title: "Màn hình OLED",
      text: [
        "Tỷ lệ 16:9",
        "Kích thước vùng hoạt động: 1913(H)*1084(V)",
        "Màn hình kích cường lực 7H",
      ],
    },
    {
      id: "02",
      title: "Độ phân giải",
      text: ["3840(H)*2160(V) (4K)"],
    },
    {
      id: "03",
      title: "Công nghệ cảm ứng",
      text: ["Cảm ứng đa điểm:20 điểm", "Điểm chạm 1mm", "Độ trễ: 8mm/s"],
    },
    {
      id: "04",
      title: "Âm thanh",
      text: ["2 Loa*15W"],
    },
    {
      id: "05",
      title: "Cấu hình",
      text: [
        "Androi11/4GB/32gb",
        "CPU:Quad-Core ẢM Cortex A55/Mali-G52 MP2(2EE)",
        "Wifi:2.4G + 5G",
      ],
    },
    {
      id: "06",
      title: "Cổng kết nối",
      text: [
        "Mặt trước: Type C*1 HDMI IN*1,USB Touch*11,USB3.0*1,HDMI IN 2,RJ45 1,RS 232 1,AV IN 1,USB TOUCH 1",
        "Mặt sau:ANDROID USB 2.0*1 ANDROID ÚSB3.0*1,HDMI IN 2,RJ45 1,RS232 1,AV IN 1,USB TOUCH 1,SPDIF OUT*1,Tai nghe 1",
      ],
    },
    {
      id: "07",
      title: "Nguồn",
      text: ["M100-240V:50/60HZ"],
    },
  ];
  const size = useWindowSize();
  return (
    <div className={styles["specifications"]}>
      <div className={styles["header"]}>
        <div className={styles["left"]}>
          <img src="./left.png" alt="" />
        </div>
        <div className={styles["content"]}>
          <h1>Thông số kỹ thuật</h1>
        </div>
        <div className={styles["right"]}>
          <img src="./right.png" alt="" />
        </div>
      </div>
      <div className={styles["flex"]}>
        {specifications.map((item, index) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles[`flex-${index}`]}>
              <div className={styles["title"]}>{item.title}</div>
              {item.text.map((item, index) => (
                <div className={styles["text"]}>{item}</div>
              ))}
            </div>
            <p className={styles[`id-${index}`]}>{item.id}</p>
          </div>
        ))}
      </div>
      {size.width > 1323 && (
        <img className={styles["icon"]} src="./icon.png" alt="" />
      )}
      <div className={styles["bottom"]}>
        <img src="./center.png" alt="" />
      </div>
    </div>
  );
};

export default Specifications;
