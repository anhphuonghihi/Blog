import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Button, ButtonWhite } from "@internals/components";
import styles from "./Header.module.scss";
import { useWindowSize } from "@internals/hooks";
const Header = ({ title, h2, text, btn, link, video, btn2, link2 }) => {
  const [width, setWidth] = useState(1000);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 1000 && size.width < 1504) {
      setWidth(size.width - 520);
    }
    if (size.width < 1000) {
      setWidth(size.width);
    }
  }, [size]);

  return (
    <div>
      <div className={styles["flex"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>{title}</div>
          <h2>{h2}</h2>
          <div className={styles["content"]}>{text}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {btn && <Button link={link} text={btn} />}
            {btn2 && <ButtonWhite link={link2} text={btn2} />}
          </div>
        </div>
        <YouTube
          opts={{
            width,
            height: width * (9 / 16),
          }}
          videoId={video}
          className={styles["youtobe"]}
        />
      </div>
    </div>
  );
};

export default Header;
