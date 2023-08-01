import NavCard from "../NavCard";
import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";
import TransactionMenu from "./TransactionMenu/TransactionMenu";

import "./TransactionNav.css";

function TransactionNav(props) {
  const { addTransactionbtnHandler, userClickByTransactions } = props;
  const addTransactionbtn = () => {
    addTransactionbtnHandler();
  };

  const hadndlingUserClick = (event) => {
    userClickByTransactions(event);
  };

  return (
    <>
      <NavCard>
        <div className="transaction-heading-container">
          <h1 className="transaction-nav-heading">Transactions</h1>
          <AddTransactionButton addTransaction={addTransactionbtn} />
        </div>
        <TransactionMenu hadndlingUserClicks={hadndlingUserClick} />
      </NavCard>
    </>
  );
}

export default TransactionNav;
