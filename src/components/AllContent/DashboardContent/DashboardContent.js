import ContentContainerCard from "../ContentContainerCard";
import TransactionListCard from "./TransactionListCard/TransactionListCard";
import TransactionOverviewCard from "./TransactionOverviewCard/TransactionOverviewCard";
import LastThreeTransactionItem from "./LastThreeTransactionItem/LastThreeTransactionItem";

import Credit from "./Credit/Credit";
import Debit from "./Debit/Debit";

import "./DashboardContent.css";

function DashboardContent() {
  return (
    <ContentContainerCard>
      <div className="credit-debit-amount-container">
        <Credit />
        <Debit />
      </div>
      <h2 className="last-transaction-text">Last Transactions</h2>
      <TransactionListCard>
        <LastThreeTransactionItem />
      </TransactionListCard>
      <h2 className="credit-debit-text">Debit & Credit Overview</h2>
      <TransactionOverviewCard />
    </ContentContainerCard>
  );
}

export default DashboardContent;
