import React from "react";
import { Card, Typography, Flex, Divider } from "antd";
import { BankOutlined } from "@ant-design/icons";
import UPIQRCode from "../UPIQRCode/UPIQRCode";
import useResponsive from "../../hooks/useResponsive";
import BankDetails from "../BankDetails";

const { Title } = Typography;

const ForDonation = () => {
  const { isMobile } = useResponsive();

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
      <Flex
        justify="center"
        align="center"
        gap={20}
        wrap={isMobile} // Wrap in mobile view, side-by-side on desktop
        style={{ textAlign: "center", minHeight: 320 }} // Ensures height for vertical divider
      >
        {/* UPI QR Code */}
        <UPIQRCode />

        {/* OR Divider (Horizontal on desktop, Vertical on mobile) */}
        {isMobile ? (
          <Divider style={{ borderColor: "#1565C0" }}>Or</Divider>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100%", // Ensures full height
            }}
          >
            <Divider
              type="vertical"
              style={{
                height: "100px", // Visible even if content is small
                borderColor: "#1565C0",
              }}
            />
            <Title level={5} style={{ margin: "5px 0", color: "#1565C0" }}>
              Or
            </Title>
            <Divider
              type="vertical"
              style={{
                height: "100px",
                borderColor: "#1565C0",
              }}
            />
          </div>
        )}

        {/* Bank Details */}
        <BankDetails />
      </Flex>
    </Card>
  );
};

export default ForDonation;
