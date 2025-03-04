import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutSection = () => {
  return (
    <Card
      id="about-us"
      variant="borderless"
      title="About Us"
      styles={{
        title: {
          textAlign: "left",
        },
        body: {
          textAlign: "left",
        },
      }}
    >
      <Paragraph>
        The <b>Good Will Foundation</b> is a charitable student-organized trust
        dedicated to supporting financially underprivileged first-year MBBS
        students. Our mission is to provide financial aid, resources, and a
        platform for students to pursue their dreams of becoming doctors,
        regardless of their economic background.
      </Paragraph>

      <Title level={4} id="our-goals">Our Goals</Title>
      <ul>
        <li>
          Ensure no talented and deserving first-year MBBS student is deprived
          of education due to financial constraints.
        </li>
        <li>
          Create a support system that promotes academic success and personal
          growth.
        </li>
        <li>Empower students to focus on studies without financial worries.</li>
      </ul>

      <Title level={4} id="how-the-foundation-started">How the Foundation Started</Title>
      <Paragraph>
        The foundation was initiated by the <b>2019 MBBS batch</b> in 2020 to
        address financial challenges faced by students in their first year. The
        idea was inspired by the
        <b> Bhoodan Movement</b> of Vinoba Bhave and was pioneered by{" "}
        <b>Acha Sathish Kumar</b>.
      </Paragraph>
      <Title level={4} id="our-supporters">Our Supporters</Title>
      <Paragraph>To be created</Paragraph>
      <Title level={4} id="Why We do it">Why we do it</Title>
      <Paragraph>
        The foundation believes " Although we can do so little but together we
        can support and tackle those challenges "
      </Paragraph>
    </Card>
  );
};

export default AboutSection;
