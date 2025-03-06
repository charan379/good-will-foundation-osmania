import React from "react";
import { Card, Typography, Descriptions, Space } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

const { Title, Link } = Typography;

const ContactInfo = () => {
  return (
    <Card
      title="Contact Info"
      variant="borderless"
      id="contact-us"
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
      <Descriptions column={{ xs: 1, sm: 1, md: 2 }} bordered={false}>
        <Descriptions.Item
          label="📞 Phone"
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Link href="tel:+919502856759">+91 9502856759</Link>,{" "}
          <Link href="tel:+919121941503">+91 9121941503</Link>
        </Descriptions.Item>

        <Descriptions.Item
          label="📧 Email"
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Link href="mailto:goodwillfoundationomc@gmail.com">
            goodwillfoundationomc@gmail.com
          </Link>
        </Descriptions.Item>

        <Descriptions.Item
          label="🌍 Website"
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Link href="#" target="_blank" rel="noopener noreferrer">
            Good Will Foundation
          </Link>
        </Descriptions.Item>

        <Descriptions.Item
          label="📸 Instagram"
          styles={{ label: { color: "#1565C0", fontWeight: 600 } }}
        >
          <Space>
            <InstagramOutlined style={{ fontSize: "18px", color: "#E1306C" }} />
            <Link
              href="https://www.instagram.com/goodwill_foundation_omc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C", fontWeight: 500 }}
            >
              @goodwill_foundation_omc
            </Link>
          </Space>
        </Descriptions.Item>
      </Descriptions>

      <Title
        level={5}
        style={{ marginTop: "10px", color: "#1565C0", fontWeight: 600 }}
      >
        📍 Address
      </Title>
      <Link
        href="https://www.google.com/maps?q=Room+No+140,+Osmania+Medical+College,+5-1-876,+Turrebaz+Khan+Rd,+Troop+Bazaar,+Koti,+Hyderabad+-+500095,+Telangana"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#333", fontWeight: 500 }}
      >
        Room No 140, Osmania Medical College, 5-1-876, Turrebaz Khan Rd, Troop
        Bazaar, Koti, Hyderabad - 500095, Telangana.
      </Link>
    </Card>
  );
};

export default ContactInfo;
