import { Button, Drawer } from "antd";
import NavMenu from "../NavMenu";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const NavMobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="text" onClick={showDrawer} icon={<MenuOutlined style={{fontSize: "22px"}}/>} size="large" />
      <Drawer title="Good Will Foundation Osmania University" onClose={onClose} open={open} width={"80%"}>
        <NavMenu />
      </Drawer>
    </>
  );
};

export default NavMobileDrawer;
