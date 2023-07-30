import NavCard from "../NavCard";
import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";
import TransactionMenu from "./TransactionMenu/TransactionMenu";

import "./TransactionNav.css";

function TransactionNav(props) {
  const { addTransactionbtnHandler } = props;
  const addTransactionbtn = () => {
    addTransactionbtnHandler();
  };

  return (
    <>
      <NavCard>
        <div className="transaction-heading-container">
          <h1 className="transaction-nav-heading">Transactions</h1>
          <AddTransactionButton addTransaction={addTransactionbtn} />
        </div>
        <TransactionMenu />
      </NavCard>
    </>
  );
}

export default TransactionNav;
