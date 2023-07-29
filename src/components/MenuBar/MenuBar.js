import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import UserLogout from "./UserLogout/UserLogout";

import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="menu-bar-container">
      <div>
        <Logo />
        <Menu />
      </div>
      <UserLogout />
    </div>
  );
}

export default MenuBar;
