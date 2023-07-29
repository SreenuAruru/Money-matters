import "./ContentContainerCard.css";

function ContentContainerCard(props) {
  return <div className="content-container">{props.children}</div>;
}

export default ContentContainerCard;
