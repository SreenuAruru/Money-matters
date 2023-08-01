import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import PopupCard from "./PopupCard/PopupCard";

import "./Popup.css";

const editPopupCard = (props) => {
  const { transactionHandling } = props;
  const [userTransactioFormDeatils, setUserTransactioFormDeatils] = useState({
    name: "",
    type: "debit",
    category: "shopping",
    amount: 0,
    date: "",
  });

  function userForHandleChange(event) {
    const { name, value } = event.target;
    setUserTransactioFormDeatils({
      ...userTransactioFormDeatils,
      [name]: value,
    });
  }

  const handlingTransactionSubmit = (event) => {
    event.preventDefault();
    console.log("trigger popup form submit");
  };

  return (
    <div>
      <PopupCard>
        <div className="popup-cancel-heading-container">
          <h2 className="popup-heading">Add Transaction</h2>
          <button
            onClick={props.onEditPopupHandler}
            className="popup-cross-button"
          >
            <RxCross2 className="popup-cross-icon" />
          </button>
        </div>
        <p className="popup-para">Lorem ipsum dolor sit amet, consectetur</p>

        <form onSubmit={handlingTransactionSubmit}>
          <label className="pop-label" htmlFor="name">
            Transaction Name
          </label>
          <br />
          <input
            className="popup-input"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={userForHandleChange}
            value={userTransactioFormDeatils.name}
          />
          <br />

          <label className="pop-label" htmlFor="transaction-type">
            Transaction Type
          </label>
          <br />
          <select
            onChange={userForHandleChange}
            name="type"
            value={userTransactioFormDeatils.type}
          >
            <option value="debit">debit</option>
            <option value="credit">credit</option>
          </select>
          <br />

          <label className="pop-label" htmlFor="category">
            Category
          </label>
          <br />
          <select
            onChange={userForHandleChange}
            name="category"
            value={userTransactioFormDeatils.category}
          >
            <option value="shopping">Shopping</option>
            <option value="service">Service</option>
            <option value="transfer">Transfer</option>
          </select>
          <br />

          <label className="pop-label" htmlFor="amount">
            Amount
          </label>
          <br />
          <input
            value={userTransactioFormDeatils.amount}
            onChange={userForHandleChange}
            className="popup-input"
            type="number"
            name="amount"
            placeholder="Enter Your Amount"
          />
          <br />

          <label className="pop-label" htmlFor="date">
            Date
          </label>
          <br />
          <input
            value={userTransactioFormDeatils.date}
            onChange={userForHandleChange}
            className="popup-input"
            type="date"
            name="date"
          />
          <br />

          <button className="add-transaction-button-value" type="submit">
            Add Transaction
          </button>
        </form>
      </PopupCard>
    </div>
  );
};

export default editPopupCard;
