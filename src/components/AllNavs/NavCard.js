import "./NavCard.css";

function NavCard(props) {
  return <div className="navbar-container">{props.children}</div>;
}

export default NavCard;
