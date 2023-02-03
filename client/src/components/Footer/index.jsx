import React from "react";
import { Grid, Section, CardBody, CardTitle, Image } from "uikit-react";
import styles from "./Footer.module.scss";
import ViewsonicBlack from "../../assets/viewsonic-black.png";

const Footer = () => {
  return (
    <div>
      <Grid
        gutter="collapse uk-child-width-expand@s uk-text-center"
        style={{ padding: 15 }}
      >
        <Section className={styles["logo"]}>
          <div>
            <Image src={ViewsonicBlack} alt="logo" width="300px" />
          </div>
        </Section>
        <Section>
          <div className={styles["footer-content"]}>
            <CardTitle>Liên hệ</CardTitle>
            <CardBody >
              Số điện thoại: +886-2-2246-3456
              <br />
              Email:abc@gmail.com
            </CardBody>
          </div>
        </Section>
        <Section>
          <div className={styles["footer-content"]}>
            <CardTitle>Địa chỉ</CardTitle>
            <CardBody>
              ViewSonic International Corporation 9F, No. 192, Lien Chien Road
              Chung Ho, Taipei Taiwan
            </CardBody>
          </div>
        </Section>
      </Grid>
    </div>
  );
};

export default Footer;
