import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ContactInfo = () => {
  return (
    <Card
      title="Contact Info"
      variant="borderless"
      id="contact-us"
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
      <Paragraph>
        <b>📞 Phone:</b> <a href="tel:9502856759">9502856759</a>,{" "}
        <a href="tel:9121941503">9121941503</a> <br />
        <b>📧 Email:</b>{" "}
        <a href="mailto:goodwillfoundationomc@gmail.com">
          goodwillfoundationomc@gmail.com
        </a>{" "}
        <br />
        <b>📸 Instagram:</b>{" "}
        <a
          href="https://www.instagram.com/goodwill_foundation_omc"
          target="_blank"
          rel="noopener noreferrer"
        >
          @goodwill_foundation_omc
        </a>{" "}
        <br />
        <b>🌍 Website:</b>{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Good Will Foundation
        </a>{" "}
        <br />
      </Paragraph>

      <Title level={5}>📍 Address</Title>
      <Paragraph>
        <a
          href="https://www.google.com/maps?q=Room+No+140,+Osmania+Medical+College,+5-1-876,+Turrebaz+Khan+Rd,+Troop+Bazaar,+Koti,+Hyderabad+-+500095,+Telangana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Room No 140, Osmania Medical College, 5-1-876, Turrebaz Khan Rd, Troop
          Bazaar, Koti, Hyderabad - 500095, Telangana.
        </a>
      </Paragraph>
    </Card>
  );
};

export default ContactInfo;
