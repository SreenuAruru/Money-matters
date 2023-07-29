import { AiOutlinePlus } from "react-icons/ai";

import "./AddTransactionButton.css";

function AddTransactionButton() {
  return (
    <button className="transaction-button">
      <AiOutlinePlus className="plus-icon" />
      <p className="add-transaction-text">Add Transaction</p>
    </button>
  );
}

export default AddTransactionButton;
