import { HiMiniHome } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <li className="menu-icon-container">
        <div className="side-menu-bar"></div>
        <HiMiniHome className="menu-home-icon" />
        <p className="menu-text active-text">Dashboard</p>
      </li>
      <li className="menu-icon-container icon-margin">
        <FaFileInvoiceDollar className="menu-transfer-icon" />
        <p className="menu-text">Transactions</p>
      </li>
      <li className="menu-icon-container icon-margin">
        <FaUserAlt className="menu-profile-icon" />
        <p className="menu-text">Profile</p>
      </li>
    </div>
  );
}

export default Menu;
