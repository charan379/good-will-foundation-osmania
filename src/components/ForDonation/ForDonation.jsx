import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ForDonation = () => {
  return (
    <Card
      title="For Donation"
      variant="borderless"
      id="for-donations"
      styles={{
        body: {
          textAlign: "left",
        },
        title: {
          textAlign: "left",
        },
        header: {
          background:
            "linear-gradient(114deg, rgb(120, 88, 248) 0%, rgb(88, 165, 254) 100%)",
          color: "#fff",
        },
      }}
    >
      <Title level={4} style={{ marginTop: "0" }}>
        Bank Account Details
      </Title>
      <Paragraph>
        <b>Name:</b> Good Will Foundation <br />
        <b>A/c No:</b> 41832347362 <br />
        <b>IFSC Code:</b> SBIN0021110 <br />
        <b>Bank Name:</b> SBI OMC
      </Paragraph>
    </Card>
  );
};

export default ForDonation;
