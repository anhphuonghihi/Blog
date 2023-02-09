import React from "react";
import styles from "./Email.module.scss";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import { Link } from "react-router-dom";
const Email = () => {
  return (
    <div className={styles["email"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <div className={styles["icon"]}>
            <MarkunreadOutlinedIcon />
          </div>
          <div className={styles["text"]}>
            <div className={styles["content"]}>
              <div className={styles["flex"]}>
                <h2>Đăng ký để nhận bản tin</h2>
                <p>
                  Đăng ký nhận bản tin ViewSonic Education để cập nhật những tin
                  tức mới nhất và xu hướng giáo dục trên thế giới.
                </p>
              </div>
            </div>
          </div>
          <div className={styles["form"]}>
            <form>
              <input
                style={{ maxWidth: 400 }}
                type="email"
                className={styles["input"]}
                name="email"
                placeholder="Email address"
                required=""
              />
              <div className={styles["check"]}>
                <input
                  className={styles["check-input"]}
                  id="check"
                  type="checkbox"
                  required=""
                />
                <label className={styles["check-label"]} for="check">
                  <small>
                    Tôi đã đọc và đồng ý với
                    <Link to="/policy"> Cam Kết Bảo Mật </Link>
                    và
                    <Link to="/legal"> Điều Khoản Sử Dụng </Link>
                  </small>
                </label>
              </div>
              <button type="submit" className={styles["submit"]}>
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
