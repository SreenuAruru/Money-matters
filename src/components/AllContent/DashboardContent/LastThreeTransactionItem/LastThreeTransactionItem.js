import { CgArrowUpO, CgArrowDownO } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import "./LastThreeTransactionItem.css";

function LastThreeTransactionItem() {
  const currentDate = new Date();
  const dayValue = currentDate.getDate();
  const monthValue = currentDate.toLocaleString("default", { month: "short" });
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = currentDate.toLocaleString("en-US", timeOptions);

  return (
    <li className="transfer-item">
      <div className="arrow-category-name-container">
        <div className="arrow-name-container">
          <CgArrowUpO className="up-down-status-arrow" />
          <h4 className="spend-money-name">Spotify Subsciption</h4>
        </div>
        <p className="category-name">Shopping</p>
      </div>

      <div className="date-edit-delete-container">
        <p className="date-text">
          {dayValue} {monthValue}, {formattedTime}
        </p>
        <p className="amount-text">-$2,500</p>
        <div className="edit-delete-buttons-container">
          <MdOutlineModeEditOutline className="edit-icon" />
          <RiDeleteBinLine className="delte-icon" />
        </div>
      </div>
    </li>
  );
}

export default LastThreeTransactionItem;
