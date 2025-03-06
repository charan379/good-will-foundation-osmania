import { Button, Flex, Typography } from "antd";
import NavMenu from "../NavMenu";
import Sider from "antd/es/layout/Sider";
import useNavMobileDrawer from "../../context/useNavMobileDrawer";
import { CloseOutlined } from "@ant-design/icons";

const NavMobileDrawerTitle = () => {
  const { closeDrawer } = useNavMobileDrawer();

  return (
    <Flex
      style={{
        padding: "10px 0px 0px 5px",
        justifyContent: "space-between",
        alignItems: "start",
        justifyItems: "center",
        position: "absolute",
        width: "100%",
        background: "#fff",
        height: "65px",
        zIndex: 10,
        top: 0,
        left: 0,
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <Typography.Title
          level={5}
          style={{
            margin: 0,
            color: "#1565C0",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1px",
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
      <Button
        type="text"
        onClick={closeDrawer}
        icon={<CloseOutlined style={{ fontSize: "22px" }} />}
        size="large"
      />
    </Flex>
  );
};

const NavMobileDrawer = () => {
  const { isOpen, closeDrawer } = useNavMobileDrawer();

  return (
    <Sider
      collapsedWidth={0}
      collapsed={!isOpen}
      onCollapse={closeDrawer}
      collapsible
      width={"87%"}
      style={{
        textAlign: "left",
        overflow: "hidden", // Hide full overflow, NavMenu will handle scrolling
        height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1000,
        background: "#fff",
        boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.15)",
      }}
      theme="light"
      breakpoint="lg"
      zeroWidthTriggerStyle={{ display: "none" }}
    >
      {/* Fixed Title Section */}
      <NavMobileDrawerTitle />

      {/* Scrollable Menu */}
      <div
        style={{
          marginTop: "65px", // Adjust based on title height
          overflowY: "auto",
          height: "calc(100vh - 80px)", // Remaining space after title
          padding: "10px",
        }}
      >
        <NavMenu />
      </div>
    </Sider>
  );
};

export default NavMobileDrawer;
