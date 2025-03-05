import { Col, Image, Layout, Row } from "antd";
import NavMenu from "../NavMenu";
import NavMobileDrawer from "../NavMobileDrawer";
import useResponsive from "../../hooks/useResponsive";

const Header = () => {
  const { isMobile } = useResponsive();
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
          padding: isMobile ? "0px 0px" : "0px 15px 0px 10px",
        }}
        justify={isMobile ? "center" : "space-between"}
        align={"middle"}
      >
        <Col xs={20} lg={4} style={{ textAlign: "left", padding: "0px" }}>
          <Image
            preview={false}
            width={65}
            height={65}
            alt="good-will-foundation-osmania-logo"
            src="/good-will-foundation-osmania/images/logo/good-will-foundation-logo.png"
          />
        </Col>
        <Col xs={0} lg={14}>
          <NavMenu />
        </Col>
        <Col xs={4} lg={0}>
          <NavMobileDrawer />
        </Col>
        <Col xs={0} lg={4} style={{ textAlign: "right", padding: "0px" }}>
          <Image
            preview={false}
            width={65}
            height={65}
            alt="good-will-foundation-osmania-logo"
            src="/good-will-foundation-osmania/images/logo/osmania-college-logo.png"
          />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
