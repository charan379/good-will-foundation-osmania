import { Button, Col, Flex, Image, Layout, Row } from "antd";
import NavMenu from "../NavMenu";
// import NavMobileDrawer from "../NavMobileDrawer";
import useResponsive from "../../hooks/useResponsive";
// import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import useNavMobileDrawer from "../../context/useNavMobileDrawer";
import NavTitle from "../NavTitle";

const Header = () => {
  const { isMobile } = useResponsive();

  const { toggleDrawer } = useNavMobileDrawer();

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 0px 0 0",
      }}
    >
      <Row
        style={{
          width: "100%",
          padding: isMobile ? "0px 10px 0px 0px" : "0px 15px 0px 10px",
        }}
        justify={"space-between"}
        align={"middle"}
      >
        <Col xs={18} lg={6} style={{ textAlign: "left", padding: "0px" }}>
          <Flex
          justify="flex-start"
          align="center"
          >
            <Image
              preview={false}
              width={65}
              height={65}
              alt="good-will-foundation-osmania-logo"
              src="/images/logo/good-will-foundation-logo.png"
            />
            <NavTitle />
          </Flex>
        </Col>
        <Col xs={0} lg={16}>
          <NavMenu />
        </Col>
        <Col xs={2} lg={0}>
          <Button
            type="text"
            onClick={toggleDrawer}
            icon={<MenuOutlined style={{ fontSize: "22px" }} />}
            size="large"
          />
        </Col>
        <Col xs={0} lg={2} style={{ textAlign: "right", padding: "0px" }}>
          <Image
            preview={false}
            width={65}
            height={65}
            alt="good-will-foundation-osmania-logo"
            src="/images/logo/osmania-college-logo.png"
          />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
