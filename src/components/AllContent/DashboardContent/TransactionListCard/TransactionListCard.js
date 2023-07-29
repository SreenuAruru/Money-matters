import "./TransactionListCard.css";

function TransactionListCard(props) {
  return <ul className="trasaction-list-container">{props.children}</ul>;
}

export default TransactionListCard;
