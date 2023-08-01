import { Component } from "react";

import { CgArrowUpO, CgArrowDownO } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Date from "../../TranscactionContent/Date/Date";
import Cookies from "js-cookie";

import "./LastThreeTransactionItem.css";

class LastThreeTransactionItem extends Component {
  state = {
    allTransactionDataValue: [],
  };

  deleteButton = () => {
    const { deleteHandler } = this.props;
    deleteHandler();
  };

  componentDidMount() {
    this.fecthAllTransactionData();
  }

  fecthAllTransactionData = async () => {
    const userId = Cookies.get("user_id");
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";

    const queryString = new URLSearchParams({
      limit: 3,
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
    const { allTransactionDataValue } = this.state;
    const userId = Cookies.get("user_id");
    const userImage =
      "https://th.bing.com/th/id/R.c3e7fea834548c6b7d7bf4ae3d371f72?rik=FCcvEoGVBD14BQ&riu=http%3a%2f%2fwww.logidriveindia.com%2fwp-content%2fuploads%2f2020%2f06%2f130-1300253_female-user-icon-png-download-user-image-color.png&ehk=xVmpqWHHZJuNw5ERCVVv3%2bJ0PP6woCZmNd1tme3ZZQc%3d&risl=&pid=ImgRaw&r=0";

    const transactionInfoTableClass = "dash-transaction-table-info";

    return (
      <table className="dash-transaction-table">
        <tbody>
          {allTransactionDataValue.map((eachtTransaction) => (
            <tr
              key={eachtTransaction.id}
              className="dash-table-row-transaction"
            >
              <td className={transactionInfoTableClass}>
                <div className="dash-arrow-name-container">
                  {eachtTransaction.type === "credit" ? (
                    <CgArrowUpO className="up-status-arrow" />
                  ) : (
                    <CgArrowDownO className="down-status-arrow" />
                  )}
                  {userId === "3" && (
                    <img
                      src={userImage}
                      className="admin-images"
                      alt="admin-image"
                    />
                  )}
                  <h4 className="dash-spend-money-name">
                    {eachtTransaction.transactionName}
                  </h4>
                </div>
              </td>
              <td className={transactionInfoTableClass}>
                <p className="dash-category-name">
                  {eachtTransaction.category}
                </p>
              </td>
              <td className={transactionInfoTableClass}>
                {<Date eachtTransactionDate={eachtTransaction.date} />}
              </td>
              <td className={transactionInfoTableClass}>
                {
                  <p
                    className={`dash-amount-text ${
                      eachtTransaction.type === "debit"
                        ? "dash-amount-text-active"
                        : ""
                    }`}
                  >
                    {eachtTransaction.amount}
                  </p>
                }
              </td>
              <td className={transactionInfoTableClass}>
                <div className="dash-edit-delete-buttons-container">
                  <button className="delete-edit-button">
                    <MdOutlineModeEditOutline className="edit-icon" />
                  </button>
                  <button
                    className="delete-edit-button"
                    onClick={this.deleteButton}
                  >
                    <RiDeleteBinLine className="delte-icon" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default LastThreeTransactionItem;
