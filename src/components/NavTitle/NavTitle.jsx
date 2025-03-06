import { Typography } from "antd";
import React from "react";

const NavTitle = () => {
  return (
    <div
    style={{
        height: "65px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0px"
    }}
    >
      <Typography.Title
        level={5}
        style={{
          margin: 0,
          color: "#1565C0",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0px",
        }}
      >
        Good Will Foundation
      </Typography.Title>
      <Typography.Text
        style={{
          margin: 0,
          color: "#FB8C00",
          fontWeight: 500,
          letterSpacing: "0.5px",
        }}
      >
        Osmania Medical College
      </Typography.Text>
    </div>
  );
};

export default NavTitle;
