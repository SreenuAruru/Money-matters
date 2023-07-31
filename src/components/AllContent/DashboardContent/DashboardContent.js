import { useState } from "react";

import ContentContainerCard from "../ContentContainerCard";
import TransactionOverviewCard from "./TransactionOverviewCard/TransactionOverviewCard";
import LastThreeTransactionItem from "./LastThreeTransactionItem/LastThreeTransactionItem";
import WarningDeletePopup from "../../Popups/WarningDeletePopup/WarningDeletePopup";

import Credit from "./Credit/Credit";
import Debit from "./Debit/Debit";

import "./DashboardContent.css";

function DashboardContent() {
  const [deletePopu, setDeletePopus] = useState();

  const popupHandler = () => {
    setDeletePopus(null);
  };

  const deleteButtonHandler = () => {
    setDeletePopus(true);
  };
  return (
    <>
      {deletePopu && (
        <WarningDeletePopup onPopupDeleteWarningHandler={popupHandler} />
      )}
      <ContentContainerCard>
        <div className="credit-debit-amount-container">
          <Credit />
          <Debit />
        </div>
        <h2 className="last-transaction-text">Last Transactions</h2>
        <LastThreeTransactionItem deleteHandler={deleteButtonHandler} />
        <h2 className="credit-debit-text">Debit & Credit Overview</h2>
        <TransactionOverviewCard />
      </ContentContainerCard>
    </>
  );
}

export default DashboardContent;
