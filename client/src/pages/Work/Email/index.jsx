import React from "react";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import styles from "./Email.module.scss";
import { red } from "@mui/material/colors";
import { ButtonWhite, Button } from "@internals/components";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
const Email = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <div className={styles["content"]}>
          <TextsmsOutlinedIcon sx={{ fontSize: 64 }} />
          <h3>
            Liên hệ với chuyên gia của chúng tôi để được tư vấn về giải pháp làm
            việc hiệu quả.
          </h3>
          <p> &nbsp; </p>
          <p> &nbsp; </p>
          <ButtonWhite link="/" text="Yêu Cầu Mua Hàng &nbsp; " icon />
        </div>
      </div>
      <form className={styles["box"]}>
        <div className={styles["content"]}>
          <MailOutlineIcon sx={{ fontSize: 64, color: red }} />
          <h3>
            Liên hệ với chuyên gia của chúng tôi để được tư vấn về giải pháp làm
            việc hiệu quả.
          </h3>
          <input
            type="email"
            className={styles["input"]}
            name="email"
            placeholder="Địa chỉ Email"
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
                <Link to="/policy"> cam kết bảo mật </Link>
                và
                <Link to="/legal"> điều khoản sử dụng </Link>
              </small>
            </label>
          </div>
          <Button link="/" text="Yêu Cầu Mua Hàng &nbsp; " />
        </div>
      </form>
    </div>
  );
};

export default Email;
