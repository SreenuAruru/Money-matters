import { Link, withRouter } from "react-router-dom";

import { HiMiniHome } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import "./Menu.css";

function Menu() {
  return (
    <ul className="menu-container">
      <li className="menu-icon-container">
        <div className="side-menu-bar"></div>
        <HiMiniHome className="menu-home-icon" />
        <Link to="/" className="link-style">
          <p className="menu-text active-text">Dashboard</p>
        </Link>
      </li>
      <li className="menu-icon-container icon-margin">
        <FaFileInvoiceDollar className="menu-transfer-icon" />
        <Link to="/transaction" className="link-style">
          <p className="menu-text">Transactions</p>
        </Link>
      </li>
      <li className="menu-icon-container icon-margin">
        <FaUserAlt className="menu-profile-icon" />
        <Link to="/profile" className="link-style">
          <p className="menu-text">Profile</p>
        </Link>
      </li>
    </ul>
  );
}

export default withRouter(Menu);
