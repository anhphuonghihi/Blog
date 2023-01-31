import React from "react";
import {
  Grid,
  Section,
  Card,
  CardBody,
  Image,
} from "uikit-react";
import ViewsonicBlack from "../../assets/viewsonic-black.png";
const Footer = () => {
  return (
    <div>
      <Grid gutter="collapse uk-child-width-expand@s uk-text-center">
        <Section>
          <Card>
            <CardBody>
              <Image src={ViewsonicBlack} alt="logo" />
            </CardBody>
          </Card>
        </Section>
        <Section>
          <Card>
            <Card>
              <CardBody>Content body of the Card</CardBody>
            </Card>
          </Card>
        </Section>
        <Section>
          <Card>
            <CardBody>Địa chỉ</CardBody>
          </Card>
        </Section>
      </Grid>
    </div>
  );
};

export default Footer;
