import { useState } from "react";
import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RxCross2 } from "react-icons/rx";
import PopupCard from "./PopupCard/PopupCard";

import "./Popup.css";

const Popup = (props) => {
  const userId = Cookies.get("user_id");
  const [userTransactioFormDeatils, setUserTransactioFormDeatils] = useState({
    name: "",
    type: "debit",
    category: "shopping",
    amount: 0,
    date: "",
  });
  const [toastToggle, setToastToggle] = useState(false);

  function userForHandleChange(event) {
    const { name, value } = event.target;
    setUserTransactioFormDeatils({
      ...userTransactioFormDeatils,
      [name]: value,
    });
  }

  const handlingTransactionSubmit = async (event) => {
    event.preventDefault();

    //toastify here

    const userData = {
      name: userTransactioFormDeatils.name,
      type: userTransactioFormDeatils.type,
      category: userTransactioFormDeatils.category,
      amount: userTransactioFormDeatils.amount,
      date: userTransactioFormDeatils.date,
      user_id: userId,
    };
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/add-transaction";
    const options = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      toast("Trasaction Added Successfully");
      setToastToggle(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      {toastToggle && <ToastContainer />}
      <PopupCard>
        <div className="popup-cancel-heading-container">
          <h2 className="popup-heading">Add Transaction</h2>
          <button onClick={props.onPopupHandler} className="popup-cross-button">
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

export default Popup;
