import { CgArrowUpO, CgArrowDownO } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import ContentContainerCard from "../ContentContainerCard";

import "./TranscactionContent.css";

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
];

function TranscactionContent() {
  const transactionTableRowClass = "transaction-table-row";
  const transactionInfoTableClass = "transaction-table-info";
  const currentDate = new Date();
  const dayValue = currentDate.getDate();
  const monthValue = currentDate.toLocaleString("default", { month: "short" });
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = currentDate.toLocaleString("en-US", timeOptions);

  return (
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
          {tableData.map((row) => (
            <tr key={row.id} className="table-row-transaction">
              <td className={transactionInfoTableClass}>
                <div className="arrow-name-container">
                  <CgArrowUpO className="up-down-status-arrow" />
                  <h4 className="spend-money-name">Spotify Subsciption</h4>
                </div>
              </td>
              <td className={transactionInfoTableClass}>
                <p className="category-name">Shopping</p>
              </td>
              <td className={transactionInfoTableClass}>
                {
                  <p className="date-text">
                    {dayValue} {monthValue}, {formattedTime}
                  </p>
                }
              </td>
              <td className={transactionInfoTableClass}>
                <p className="amount-text">-$2,500</p>
              </td>
              <td className={transactionInfoTableClass}>
                <div className="edit-delete-buttons-container">
                  <MdOutlineModeEditOutline className="edit-icon" />
                  <RiDeleteBinLine className="delte-icon" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContentContainerCard>
  );
}

export default TranscactionContent;
