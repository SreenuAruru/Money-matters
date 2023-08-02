import Cookies from "js-cookie";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { PiWarningLight } from "react-icons/pi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PopupCard from "../PopupCard/PopupCard";
import "./WarningDeletePopup.css";

function WarningDeletePopup(props) {
  const [toastToggle, setToastToggle] = useState(false);
  const { deleteTrasactionId } = props;
  const userId = Cookies.get("user_id");

  const delteTransactionHandler = async (event) => {
    const transactionId = { id: deleteTrasactionId };

    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/delete-transaction";
    const options = {
      method: "DELETE",
      body: JSON.stringify(transactionId),
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
      toast("Trasaction Deleted Successfully");
      setToastToggle(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <>
      {toastToggle && <ToastContainer />}

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
                Are you sure you want to Delete
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
              <button
                className="warning-delete-button"
                onClick={delteTransactionHandler}
              >
                Yes, Delete
              </button>
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
    </>
  );
}

export default WarningDeletePopup;
