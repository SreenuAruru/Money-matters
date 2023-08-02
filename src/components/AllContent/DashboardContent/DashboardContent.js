import { Component } from "react";
import Cookies from "js-cookie";

import ContentContainerCard from "../ContentContainerCard";
import TransactionOverviewCard from "./TransactionOverviewCard/TransactionOverviewCard";
import LastThreeTransactionItem from "./LastThreeTransactionItem/LastThreeTransactionItem";
import WarningDeletePopup from "../../Popups/WarningDeletePopup/WarningDeletePopup";

import Credit from "./Credit/Credit";
import Debit from "./Debit/Debit";

import "./DashboardContent.css";

class DashboardContent extends Component {
  state = {
    deletePopu: undefined,
    creditObj: {},
    debitObj: {},
    last7DayTransactionCreditDebit: [],
  };

  popupHandler = () => {
    this.setState({ deletePopu: null });
  };

  deleteButtonHandler = () => {
    this.setState({ deletePopu: true });
  };

  updatePopuHandling = (updateId) => {
    const { updatePopuHandlingValue } = this.props;
    updatePopuHandlingValue(updateId);
  };

  componentDidMount() {
    this.getUserCreditDebitTotal();
    this.getUser7DayCreditDebitTotal();
  }

  getUserCreditDebitTotal = async () => {
    const userId = Cookies.get("user_id");

    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals";

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
    };

    try {
      const response = await fetch(apiUrl, options);
      const fetchData = await response.json();

      const fetchedDataValue = {
        totalsCreditDebitTransactions:
          fetchData.totals_credit_debit_transactions,
      };

      const { totalsCreditDebitTransactions } = fetchedDataValue;
      const [debitData, creditData] = totalsCreditDebitTransactions;

      this.setState({ creditObj: creditData, debitObj: debitData });
    } catch (error) {
      console.error(error);
    }
  };

  getUser7DayCreditDebitTotal = async () => {
    const userId = Cookies.get("user_id");

    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days";

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
    };

    try {
      const response = await fetch(apiUrl, options);
      const fetchData = await response.json();
      const { last_7_days_transactions_credit_debit_totals } = fetchData;
      const last7DayTransactionCreditDebitTotal =
        last_7_days_transactions_credit_debit_totals;

      this.setState({
        last7DayTransactionCreditDebit: last7DayTransactionCreditDebitTotal,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {
      deletePopu,
      editPopu,
      creditObj,
      debitObj,
      last7DayTransactionCreditDebit,
    } = this.state;
    const creditTotal = creditObj.sum;
    const debitTotal = debitObj.sum;

    return (
      <>
        {deletePopu && (
          <WarningDeletePopup onPopupDeleteWarningHandler={this.popupHandler} />
        )}
        <ContentContainerCard>
          <div className="credit-debit-amount-container">
            <Credit creditTotalSum={creditTotal} />
            <Debit debitTotalSum={debitTotal} />
          </div>
          <h2 className="last-transaction-text">Last Transactions</h2>
          <LastThreeTransactionItem
            editButtonHandler={this.editButtonHandler}
            deleteHandler={this.deleteButtonHandler}
            updatePopuHandler={this.updatePopuHandling}
          />
          <h2 className="credit-debit-text">Debit & Credit Overview</h2>
          <TransactionOverviewCard
            last7DayTransactionCreditDebitValue={last7DayTransactionCreditDebit}
          />
        </ContentContainerCard>
      </>
    );
  }
}

export default DashboardContent;
