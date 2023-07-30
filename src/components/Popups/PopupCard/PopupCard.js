import "./PopupCard.css";

function PopupCard(props) {
  return (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  );
}

export default PopupCard;
