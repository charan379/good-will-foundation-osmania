import { BankOutlined } from "@ant-design/icons";
import { Card, Descriptions, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const BankDetails = () => {
  return (
    <Card
      style={{
        width: 420,
        height: "100%",
        borderRadius: 12,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title
        level={4}
        style={{
          marginTop: "0",
          color: "#1565C0",
          fontWeight: 600,
        }}
      >
        <BankOutlined style={{ marginRight: 8 }} />
        Bank Account Details
      </Title>

      <Descriptions column={1} bordered={false}>
        <Descriptions.Item
          label={<b>Name</b>}
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Text copyable={{ text: "Good Will Foundation" }}>
            Good Will Foundation
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
        <Descriptions.Item
          label={<b>Bank</b>}
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Text copyable={{ text: "State Bank Of India (SBI), OMC Branch" }}>
            State Bank Of India (SBI), OMC Branch
          </Text>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BankDetails;
