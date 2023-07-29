import debitImage from "../../../../images/debit.png";

import CreditAndDebitCard from "../CreditAndDebitCard/CreditAndDebitCard";

import "./Debit.css";

function Debit() {
  return (
    <CreditAndDebitCard>
      <div className="debit-amount-container">
        <h1 className="debit-amount-heading">$5,600</h1>
        <p className="debit-text">Debit</p>
      </div>
      <img className="debit-image" src={debitImage} alt="debit" />
    </CreditAndDebitCard>
  );
}

export default Debit;
