import { useState } from "react";
import "./TransactionMenu.css";

function TransactionMenu(props) {
  const [syleForTransaction, setSyleForTransaction] =
    useState("All Transaction");

  const { hadndlingUserClicks } = props;
  const menuItems = [
    { title: "All Transaction" },
    { title: "Debit" },
    { title: "Credit" },
  ];

  const handlingTransactionMenu = (event) => {
    const userClicks = event.target.innerText;
    hadndlingUserClicks(event);
    setSyleForTransaction(userClicks);
  };

  return (
    <ul className="debit-credit-menu-container">
      {menuItems.map((item) => (
        <li
          key={item.title}
          className="debit-credit-list-item"
          onClick={handlingTransactionMenu}
        >
          <a
            className={`debit-credit-menu ${
              syleForTransaction === item.title ? "selectedTrans" : ""
            }`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TransactionMenu;
