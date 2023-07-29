import logo from "../../../images/logo.png";

import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <img className="logo-img" alt="logo" src={logo} />
      <h2 className="logo-name">
        Money <span className="logo-matter-text">Matters</span>
      </h2>
    </div>
  );
}

export default Logo;
