import { CgArrowUpO, CgArrowDownO } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import "./LastThreeTransactionItem.css";

const tableData = [
  {
    id: 1,
    column1: "Data 1",
    column2: "Data 2",
    column3: "Data 3",
    column4: "Data 4",
    column5: "Data 5",
  },
  {
    id: 2,
    column1: "Data 1",
    column2: "Data 2",
    column3: "Data 3",
    column4: "Data 4",
    column5: "Data 5",
  },
  {
    id: 3,
    column1: "Data 1",
    column2: "Data 2",
    column3: "Data 3",
    column4: "Data 4",
    column5: "Data 5",
  },
];

function LastThreeTransactionItem(props) {
  const { deleteHandler } = props;

  const currentDate = new Date();
  const dayValue = currentDate.getDate();
  const monthValue = currentDate.toLocaleString("default", { month: "short" });
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = currentDate.toLocaleString("en-US", timeOptions);

  const transactionInfoTableClass = "dash-transaction-table-info";

  const deleteButton = () => {
    deleteHandler();
  };

  return (
    <table className="dash-transaction-table">
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id} className="dash-table-row-transaction">
            <td className={transactionInfoTableClass}>
              <div className="dash-arrow-name-container">
                <CgArrowUpO className="dash-up-down-status-arrow" />
                <h4 className="dash-spend-money-name">Spotify Subsciption</h4>
              </div>
            </td>
            <td className={transactionInfoTableClass}>
              <p className="dash-category-name">Shopping</p>
            </td>
            <td className={transactionInfoTableClass}>
              {
                <p className="dash-date-text">
                  {dayValue} {monthValue}, {formattedTime}
                </p>
              }
            </td>
            <td className={transactionInfoTableClass}>
              <p className="dash-amount-text">-$2,500</p>
            </td>
            <td className={transactionInfoTableClass}>
              <div className="dash-edit-delete-buttons-container">
                <button className="delete-edit-button">
                  <MdOutlineModeEditOutline className="edit-icon" />
                </button>
                <button className="delete-edit-button" onClick={deleteButton}>
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

export default LastThreeTransactionItem;
