import { Button, Col, Row, Typography } from "antd";
import styles from "./HeroContent.module.css";

const HeroContent = () => {
  const scrollToSection = () => {
    const element = document.getElementById("about-us");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className={styles.heroCard}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroText}>
        <Row
          justify="start"
          align="middle"
          style={{ minHeight: "85dvh", textAlign: "left", padding: "0 50px" }}
          id="home"
        >
          <Col sm={24}>
            <Typography.Title
              level={2}
              style={{
                margin: 0,
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              Good Will Foundation: Empowering Dreams, Transforming Lives
            </Typography.Title>
            <Typography.Text
              style={{
                margin: 0,
                color: "#fff",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              Osmania Medical College
            </Typography.Text>
            <br />
            <Typography.Text
              style={{
                margin: 0,
                color: "#fff",
                fontWeight: 500,
                letterSpacing: "0.5px",
                fontSize: "10px",
              }}
            >
              Regd.No. 46/2023
            </Typography.Text>
            <Typography.Paragraph style={{ color: "#fff", margin: "20px 0" }}>
              At Osmania Medical College, we believe that financial challenges
              should never hinder a student’s dream of becoming a doctor. Good
              Will Foundation is a student-led initiative dedicated to
              supporting financially underprivileged first-year MBBS students.
            </Typography.Paragraph>
            <Button
              type="primary"
              size="large"
              style={{
                background:
                  "linear-gradient(297deg, rgba(2,0,36,1) 0%, rgba(9,123,241,1) 0%)",
                padding: "0 30px",
                borderColor: "#2196F3",
              }}
              onClick={scrollToSection}
            >
              Read More
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroContent;
