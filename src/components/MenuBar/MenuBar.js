import { useState } from "react";

import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import UserLogout from "./UserLogout/UserLogout";

import WarningPopup from "../Popups/WarningPopup/WarningPopup";

import "./MenuBar.css";

function MenuBar() {
  const [popWarningToggle, setPopWarningToggle] = useState();

  const popupHandler = () => {
    setPopWarningToggle(null);
  };

  const logoutHalnderbuttonV = () => {
    setPopWarningToggle(true);
  };

  return (
    <>
      {popWarningToggle && (
        <WarningPopup onPopupWarningHandler={popupHandler} />
      )}
      <div className="menu-bar-container">
        <div>
          <Logo />
          <Menu />
        </div>
        <UserLogout logoutHalnderbutton={logoutHalnderbuttonV} />
      </div>
    </>
  );
}

export default MenuBar;
