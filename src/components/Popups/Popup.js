import { RxCross2 } from "react-icons/rx";
import PopupCard from "./PopupCard/PopupCard";

import "./Popup.css";

const Popup = (props) => {
  return (
    <div>
      <PopupCard>
        <div className="popup-cancel-heading-container">
          <h2 className="popup-heading">Add Transaction</h2>
          <button onClick={props.onPopupHandler} className="popup-cross-button">
            <RxCross2 className="popup-cross-icon" />
          </button>
        </div>
        <p className="popup-para">Lorem ipsum dolor sit amet, consectetur</p>
        <form>
          <label className="pop-label" htmlFor="name">
            Transaction Name
          </label>
          <br />
          <input
            className="popup-input"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
          <br />

          <label className="pop-label" htmlFor="transaction-type">
            Transaction Type
          </label>
          <br />
          <select>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
          <br />

          <label className="pop-label" htmlFor="category">
            Category
          </label>
          <br />
          <select>
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
            className="popup-input"
            type="number"
            name="name"
            placeholder="Enter Your Amount"
          />
          <br />

          <label className="pop-label" htmlFor="date">
            Date
          </label>
          <br />
          <input className="popup-input" type="date" name="name" />
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
