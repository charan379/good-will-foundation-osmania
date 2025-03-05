import React from "react";
import { Card, Typography } from "antd";
import Supporters from "../Supporters/Supporters";
import "./about-section.css"

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
        header: {
          background:
            "linear-gradient(114deg, rgb(120, 88, 248) 0%, rgb(88, 165, 254) 100%)",
          color: "#fff",
        },
      }}
    >
      <Paragraph>
        The <b>Good Will Foundation</b> is a charitable student-organized trust
        dedicated to supporting financially underprivileged first-year MBBS
        (Bachelor of Medicine, Bachelor of Surgery) students. Our mission is to
        provide financial aid, resources, and a platform for students to pursue
        their dreams of becoming doctors, regardless of their economic
        background.
      </Paragraph>

      <Title level={4} id="our-goals">
        Our Goals
      </Title>
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

      <Title level={4} id="how-the-foundation-started">
        How the Foundation Started
      </Title>
      <Paragraph>
        The roots of this innovative idea comes from the challenges faced by the
        students in the <b>MBBS first year</b> to meet their expenses and lack
        of scholarships on time . The initiative of this foundation taken by
        <b> 2019 batch Mbbs students</b> in the year 2020. It is idea of one of
        student of 2019 batch named <b>ACHA SATHISH KUMAR</b> who was inspired
        by <b>Bhoodan Movement</b> which was initiated by <b>Vinoba Bhave</b>.
      </Paragraph>
      <Paragraph>To be created</Paragraph>
      <Title level={4} id="how-we-help">
        How we help
      </Title>
      <Paragraph>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li># Distribution of Books</li>
          <li># Distribution of Bone Sets</li>
          <li># Paying Mess fees</li>
          <li># Paying Exam fees</li>
          <li>
            # Mentorship and Counseling: Guidance from experienced professionals
            to help students manage their academic journey and emotional
            well-being.
          </li>
        </ul>
      </Paragraph>
      <Title level={4} id="why-we-do-it">
        Why we do it
      </Title>
      <Paragraph>
        The foundation believes " Although we can do so little but together we
        can support and tackle those challenges "
      </Paragraph>
      <Title level={4} id="our-supporters">
        Our Supporters
      </Title>
      <Supporters />
    </Card>
  );
};

export default AboutSection;
