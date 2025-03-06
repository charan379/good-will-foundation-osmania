import React from "react";
import { Card, Typography, Descriptions } from "antd";
import { BankOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ForDonation = () => {
  return (
    <Card
      title="Donate and Support"
      variant="borderless"
      id="for-donations"
      styles={{
        body: { textAlign: "left" },
        title: { textAlign: "left" },
        header: {
          background:
            "linear-gradient(114deg, rgb(120, 88, 248) 0%, rgb(88, 165, 254) 100%)",
          color: "#fff",
        },
      }}
    >
      <Title
        level={4}
        style={{ marginTop: "0", color: "#1565C0", fontWeight: 600 }}
      >
        <BankOutlined style={{ marginRight: 8 }} />
        Bank Account Details
      </Title>

      <Descriptions column={1} bordered={false}>
        <Descriptions.Item
          label={<b>Bank Name</b>}
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Text copyable={{ text: "State Bank Of India (SBI), OMC Branch" }}>
            State Bank Of India (SBI), OMC Branch
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label={<b>Account No.</b>}
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Text copyable={{ text: "41832347362" }}>41832347362</Text>
        </Descriptions.Item>

        <Descriptions.Item
          label={<b>IFSC Code</b>}
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Text copyable={{ text: "SBIN0021110" }}>SBIN0021110</Text>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ForDonation;
