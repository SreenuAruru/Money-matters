import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { RxCross2 } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";

import PopupCard from "../PopupCard/PopupCard";
import "./WarningPopup.css";
import Cookies from "js-cookie";

function WarningPopup(props) {
  const popupLogoutHandler = () => {
    Cookies.remove("user_id");
    window.location.reload();
  };

  return (
    <PopupCard>
      <div className="waring-heading-para-container">
        <div className="warning-logunt-first-container">
          <div className="warning-logunt-second-container">
            <FiLogOut className="lagout-warning-icon" />
          </div>
        </div>
        <div className="warning-button-heading-container">
          <div className="warning-popup-cancel-heading-container">
            <h2 className="warning-popup-heading">
              Are you sure you want to Logout
            </h2>
            <button
              onClick={props.onPopupWarningHandler}
              className="warning-popup-cross-button"
            >
              <RxCross2 className="warning-popup-cross-icon" />
            </button>
          </div>
          <p className="warning-para">
            Lorem Ipusm dolor sit amet, consectetur adipiscing eli, sed
          </p>
          <div className="warning-button-container">
            <Link to="/login">
              <button
                className="warning-delete-button"
                onClick={popupLogoutHandler}
              >
                Yes, Logout
              </button>
            </Link>
            <button
              className="warning-leave-button"
              onClick={props.onPopupWarningHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </PopupCard>
  );
}

export default WarningPopup;
