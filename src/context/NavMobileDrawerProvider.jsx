import { useState } from "react";
import NavMobileDrawerContext from "./NavMobileDrawerContext";

const NavMobileDrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <NavMobileDrawerContext.Provider
      value={{ isOpen, openDrawer, closeDrawer, toggleDrawer }}
    >
      {children}
    </NavMobileDrawerContext.Provider>
  );
};

export default NavMobileDrawerProvider;
