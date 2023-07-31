import { Component } from "react";
import Cookies from "js-cookie";

import { CgArrowUpO, CgArrowDownO } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import ContentContainerCard from "../ContentContainerCard";
import WarningDeletePopup from "../../Popups/WarningDeletePopup/WarningDeletePopup";
import Date from "./Date/Date";

import "./TranscactionContent.css";

class TranscactionContent extends Component {
  state = {
    deletePopu: undefined,
    allTransactionDataValue: [],
  };

  popupHandler = () => {
    this.setState({
      deletePopu: null,
    });
  };

  transactionDeleteHandler = () => {
    this.setState({ deletePopu: true });
  };

  componentDidMount() {
    this.fecthAllTransactionData();
  }

  fecthAllTransactionData = async () => {
    const userId = Cookies.get("user_id");
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";

    const queryString = new URLSearchParams({
      limit: 100,
      offset: 1,
    }).toString();

    const urlWithQuery = `${apiUrl}?${queryString}`;

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
      const response = await fetch(urlWithQuery, options);
      const fetchData = await response.json();

      const transaction = fetchData.transactions;
      const allTransactionData = transaction.map((eachItem) => ({
        id: eachItem.id,
        amount: eachItem.amount,
        category: eachItem.category,
        date: eachItem.date,
        transactionName: eachItem.transaction_name,
        type: eachItem.type,
        userId: eachItem.user_id,
      }));

      this.setState({ allTransactionDataValue: allTransactionData });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    // const currentDate = new Date();
    // const dayValue = currentDate.getDate();
    // const monthValue = currentDate.toLocaleString("default", {
    //   month: "short",
    // });
    // const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    // const formattedTime = currentDate.toLocaleString("en-US", timeOptions);

    const transactionTableRowClass = "transaction-table-row";
    const transactionInfoTableClass = "transaction-table-info";

    const { deletePopu, allTransactionDataValue } = this.state;

    return (
      <>
        {deletePopu && (
          <WarningDeletePopup onPopupDeleteWarningHandler={this.popupHandler} />
        )}
        <ContentContainerCard>
          <table className="transaction-table">
            <thead>
              <tr>
                <th className={transactionTableRowClass}>Transaction Name</th>
                <th className={transactionTableRowClass}>Category</th>
                <th className={transactionTableRowClass}>Date</th>
                <th className={transactionTableRowClass}>Amount</th>
                <th className={transactionTableRowClass}>Edit</th>
              </tr>
            </thead>
            <tbody>
              {allTransactionDataValue.map((eachtTransaction) => (
                <tr key={eachtTransaction.id} className="table-row-transaction">
                  <td className={transactionInfoTableClass}>
                    <div className="arrow-name-container">
                      <CgArrowUpO className="up-down-status-arrow" />
                      <h4 className="spend-money-name">
                        {eachtTransaction.transactionName}
                      </h4>
                    </div>
                  </td>
                  <td className={transactionInfoTableClass}>
                    <p className="category-name">{eachtTransaction.category}</p>
                  </td>
                  <td className={transactionInfoTableClass}>
                    {<Date eachtTransactionDate={eachtTransaction.date} />}
                  </td>
                  <td className={transactionInfoTableClass}>
                    <p className="amount-text">{eachtTransaction.amount}</p>
                  </td>
                  <td className={transactionInfoTableClass}>
                    <button className="delete-edit-button">
                      <MdOutlineModeEditOutline className="edit-icon" />
                    </button>
                    <button
                      className="delete-edit-button"
                      onClick={this.transactionDeleteHandler}
                    >
                      <RiDeleteBinLine className="delte-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContentContainerCard>
      </>
    );
  }
}

export default TranscactionContent;
