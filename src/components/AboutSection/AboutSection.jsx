import React from "react";
import { Card, Typography } from "antd";
import Supporters from "../Supporters/Supporters";
import "./about-section.css";

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
        <b>Good Will Foundation</b> is a student-organized trust dedicated to
        supporting financially underprivileged first-year MBBS (Bachelor of
        Medicine, Bachelor of Surgery) students. Our mission is to provide
        financial aid, resources, and a platform for students to pursue their
        dreams of becoming doctors, regardless of their economic background.
      </Paragraph>

      <Title level={4} id="our-goals">
        Our Goals
      </Title>
      <ul>
        <li>
          To Ensure that no talented and deserving first-year MBBS student is
          deprived of education due to financial constraints.
        </li>
        <li>
          To Create a support system that promotes academic success and personal
          growth.
        </li>
        <li>
          To empower students to focus on their studies without constant worry
          of financial pressures.
        </li>
      </ul>

      <Title level={4} id="how-it-all-began">
        How It All Began
      </Title>
      <Paragraph>
        The roots of this innovative idea came from the challenges faced by the
        students in the <b>MBBS first year </b> to meet their expenses and
        insufficient timely scholarship support. <br />
        This Foundation was initiated by the <b>MBBS Students</b> of{" "}
        <b>2019 Batch </b>
        in the year <b>2020</b> who were inspired by <b>Bhoodan Movement </b>
        which was pioneered by <b>Vinoba Bhave </b> and also by{" "}
        <b>Garibi Hatao Desh Bachao </b>
        programme by our former Prime Minister <b>Indira Gandhi </b>. <br />
      </Paragraph>
      <Title level={4} id="how-we-help">
        How We Help
      </Title>
      <Paragraph>
        <ul
          style={{
            listStyleType: "disc",
          }}
        >
          <li>
            <span>
              Distribution of <b>Books</b>.
            </span>
          </li>
          <li>
            <span>
              Distribution of <b>Bone Sets</b>.
            </span>
          </li>
          <li>
            <span>
              Paying <b>Mess Fees</b> for the entire academic year.
            </span>
          </li>
          <li>
            <span>
              Paying <b>Exam Fees</b>.
            </span>
          </li>
          <li>
            <span>
              <b>Mentorship and Counseling: </b> Experienced Professionals
              provide guidance to support students in navigating their academic
              journey and emotional well-being.
            </span>
          </li>
        </ul>
      </Paragraph>
      <Title level={4} id="mission-statement">
        Mission Statement
      </Title>
      <Paragraph>
        Our foundation believes "Although we can do so little but together we
        can support and tackle those challenges".
      </Paragraph>
    </Card>
  );
};

export default AboutSection;
