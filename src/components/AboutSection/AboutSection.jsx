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
          To Ensure no talented and deserving first-year MBBS student is
          deprived of education due to financial constraints.
        </li>
        <li>
          To Create a support system that promotes academic success and personal
          growth.
        </li>
        <li>
          {" "}
          To Empower students to focus on studies without financial worries.
        </li>
      </ul>

      <Title level={4} id="how-it-all-began">
        How it all began
      </Title>
      <Paragraph>
        The roots of this innovative idea came from the challenges faced by the
        students in the <b>MBBS first year </b> to meet their expenses and
        insuffucient timely scolarship support. <br />
        This Foundation was initiated by the <b>MBBS Students</b> of{" "}
        <b>2019 Batch </b>
        in the year <b>2020</b> who were inspired by <b>Bhoodan Movement </b>
        which was pioneered by <b>Vinoba Bhave </b> and also by{" "}
        <b>Garibi Hato Desh Bachao </b>
        programme by our former Prime Minister <b>Indira Gandhi </b>. <br />
      </Paragraph>
      <Title level={4} id="how-we-help">
        How We Help
      </Title>
      <Paragraph>
        <ul
          className="how-we-help"
          style={{
            listStyleType: "none",
          }}
        >
          <li>
            {" "}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 12L12 22L2 12L12 2Z" />
            </svg>
            <span> Distribution of Books</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 12L12 22L2 12L12 2Z" />
            </svg>
            <span>Distribution of Bone Sets</span>
          </li>
          <li>
            {" "}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 12L12 22L2 12L12 2Z" />
            </svg>
            <span>Paying Mess fees</span>
          </li>
          <li>
            {" "}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 12L12 22L2 12L12 2Z" />
            </svg>
            <span>Paying Exam fees</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>
              Mentorship and Counseling: Guidance from experienced professionals
              to help students manage their academic journey and emotional
              well-being.
            </span>
          </li>
        </ul>
      </Paragraph>
      <Title level={4} id="mission-statement">
        Mission Statement
      </Title>
      <Paragraph>
        The foundation believes " Although we can do so little but together we
        can support and tackle those challenges ".
      </Paragraph>
    </Card>
  );
};

export default AboutSection;
