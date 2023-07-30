import { AiOutlinePlus } from "react-icons/ai";

import "./AddTransactionButton.css";

function AddTransactionButton(props) {
  const { addTransaction } = props;

  const addTransactionHandler = () => {
    addTransaction();
  };

  return (
    <button className="transaction-button" onClick={addTransactionHandler}>
      <AiOutlinePlus className="plus-icon" />
      <p className="add-transaction-text">Add Transaction</p>
    </button>
  );
}

export default AddTransactionButton;
