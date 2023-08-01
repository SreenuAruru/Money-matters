import creditImage from "../../../../images/credit.png";

import CreditAndDebitCard from "../CreditAndDebitCard/CreditAndDebitCard";

import "./Credit.css";

function Credit(props) {
  const { creditTotalSum } = props;

  return (
    <CreditAndDebitCard>
      <div className="credit-amount-container">
        <h1 className="credit-amount-heading">{"$" + creditTotalSum}</h1>
        <p className="credit-text">Credit</p>
      </div>
      <img className="credit-image" src={creditImage} alt="credit" />
    </CreditAndDebitCard>
  );
}

export default Credit;
