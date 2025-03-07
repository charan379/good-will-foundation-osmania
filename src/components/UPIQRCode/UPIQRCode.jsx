import React from "react";
import { Card, Typography, Space, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const UPIQRCode = () => {
  return (
    <Card
      style={{
        width: 320,
        textAlign: "center",
        padding: 5,
        borderRadius: 12,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      styles={{
        body: {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
    >
      {/* Name on Top */}
      <Title
        level={5}
        style={{ marginBottom: 5, marginTop: 0, color: "#1565C0" }}
      >
        <b>GOOD WILL FOUNDATION</b>
      </Title>

      {/* QR Code in Center */}

      <Image
        src={"/images/qr/41832347362@Sbi-qr.jpeg"}
        alt={"upi-qr-code"}
        style={{
          width: "180px",
          height: "180px",
          objectFit: "cover", // Ensures image fills area elegantly
          borderRadius: "0px", // Consistent rounded corners
        }}
        loading="lazy"
        placeholder={
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              animation: "loading 1.5s infinite",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingOutlined
              spin
              style={{ fontSize: "32px", color: "#1565C0" }}
            />
          </div>
        }
      />

      {/* UPI ID at Bottom */}
      <Space direction="horizontal" style={{ marginTop: 12 }}>
        <Text strong>
          <b>UPI ID:</b>
        </Text>
        <Link
          href="upi://pay?pa=41832347362@sbi&pn=GOOD%20WILL%20FOUNDATION&mc=8220&tr=&tn=&am=&cu=INR&url=&mode=02&purpose=00&orgid=180102&sign=MEUCIBnHPbOb3PIhtal6En6N7ekYcnGkylVMmYhULxVRDKgyAiEAsc5NCttGmuq3J/F/2nFfQDh/Dr2WLczIUCtlbsCL6X4="
          copyable
          style={{ color: "#00A0E3", fontWeight: 600 }}
        >
          41832347362@sbi
        </Link>
      </Space>
    </Card>
  );
};

export default UPIQRCode;
