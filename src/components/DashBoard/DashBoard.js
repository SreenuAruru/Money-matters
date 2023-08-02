import { Redirect } from "react-router-dom";

import { useState } from "react";

import DashboardNav from "../AllNavs/DashboardNav/DashboardNav.js";
import MenuBar from "../MenuBar/MenuBar";
import DashboardContent from "../AllContent/DashboardContent/DashboardContent.js";
import Popup from "../Popups/Popup.js";
import UpdatePopup from "../Popups/UpdatePopup/UpdatePopup.js";

import "./DashBoard.css";
import Cookies from "js-cookie";

function DashBoard() {
  const [popToggle, setPopToggle] = useState();
  const [popUpdateToggle, setUpdatePopToggle] = useState();
  const [updateIdValue, setUpdateIdValue] = useState("");

  const popupHandler = () => {
    setPopToggle(null);
  };
  const updatePopupHandling = () => {
    setUpdatePopToggle(null);
  };

  const updatePopuHandlingValue = (updateId) => {
    setUpdatePopToggle(true);
    setUpdateIdValue(updateId);
  };
  const addTransactionbtnValue = () => {
    setPopToggle(true);
  };

  // this is controling route
  const userId = Cookies.get("user_id");
  if (userId === undefined) {
    // return <Redirect to="/login" />;
  }

  return (
    <>
      {popToggle && <Popup onPopupHandler={popupHandler} />}
      {popUpdateToggle && (
        <UpdatePopup
          updateIdValue={updateIdValue}
          onUpdatePopupHandler={updatePopupHandling}
        />
      )}
      <div className="home-container">
        <MenuBar />
        <div className="menubar-content-container">
          <DashboardNav addTransactionbtn={addTransactionbtnValue} />
          <DashboardContent updatePopuHandlingValue={updatePopuHandlingValue} />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
