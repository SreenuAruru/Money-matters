import { RxCross2 } from "react-icons/rx";
import { PiWarningLight } from "react-icons/pi";

import PopupCard from "../PopupCard/PopupCard";
import "./WarningDeletePopup.css";

function WarningDeletePopup(props) {
  return (
    <PopupCard>
      <div className="waring-heading-para-container">
        <div className="warning-logunt-first-container">
          <div className="warning-logunt-second-container">
            <PiWarningLight className="lagout-warning-icon" />
          </div>
        </div>
        <div className="warning-button-heading-container">
          <div className="warning-popup-cancel-heading-container">
            <h2 className="warning-popup-heading">
              Are you sure you want to Logout
            </h2>
            <button
              onClick={props.onPopupDeleteWarningHandler}
              className="warning-popup-cross-button"
            >
              <RxCross2 className="warning-popup-cross-icon" />
            </button>
          </div>
          <p className="warning-para">
            This transaction will be deleted immediately. You can't undo this
            section
          </p>
          <div className="warning-button-container">
            <button className="warning-delete-button">Yes, Delete</button>
            <button
              className="warning-leave-button"
              onClick={props.onPopupDeleteWarningHandler}
            >
              No, Leave it
            </button>
          </div>
        </div>
      </div>
    </PopupCard>
  );
}

export default WarningDeletePopup;
