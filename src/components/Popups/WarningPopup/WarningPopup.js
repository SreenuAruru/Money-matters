import { RxCross2 } from "react-icons/rx";

import PopupCard from "../PopupCard/PopupCard";
import "./WarningPopup.css";

function WarningPopup(props) {
  return (
    <PopupCard>
      <div className="warning-popup-cancel-heading-container">
        <h2 className="warning-popup-heading">Add Transaction</h2>
        <button
          onClick={props.onPopupWarningHandler}
          className="warning-popup-cross-button"
        >
          <RxCross2 className="warning-popup-cross-icon" />
        </button>
      </div>
    </PopupCard>
  );
}

export default WarningPopup;
