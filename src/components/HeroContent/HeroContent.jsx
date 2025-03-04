import { Button, Col, Layout, Row, Typography } from "antd";

const HeroContent = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #4a90e2 30%, #000000 70%)",
        color: "#fff",
        overflow: "hidden",
        maxWidth: "100%",
        width: "100%",
      }}
      id="home"
    >
      <Row
        justify="start"
        align="middle"
        style={{ minHeight: "80vh", textAlign: "left", padding: "0 50px" }}
        id="home"
      >
        <Col sm={24} lg={12}>
          <Typography.Title style={{ color: "#fff", letterSpacing: 1 }}>
            Good Will Foundation
          </Typography.Title>
          <Typography.Title
            style={{ fontSize: "16px", color: "#fff", margin: "20px 0" }}
          >
            The Good Will Foundation is a charitable student organized trust
            dedicated to supporting financially underprivileged first-year MBBS
            (Bachelor of Medicine, Bachelor of Surgery) students .
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: "16px", color: "#e0e6ed" }}>
            It is to provide financial aid, resources, and a platform for
            students to pursue their dreams of becoming doctors, regardless of
            their economic background.
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
          >
            Read More
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeroContent;
