import "./CreditAndDebitCard.css";

function CreditAndDebitCard(props) {
  return <div className="credit-debit-container">{props.children}</div>;
}

export default CreditAndDebitCard;
