import { useContext } from "react";
import NavMobileDrawerContext from "./NavMobileDrawerContext";

const useNavMobileDrawer = () => {
  return useContext(NavMobileDrawerContext);
};

export default useNavMobileDrawer;
