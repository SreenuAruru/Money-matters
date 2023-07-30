import { useState } from "react";

import DashboardNav from "../AllNavs/DashboardNav/DashboardNav.js";
import MenuBar from "../MenuBar/MenuBar";
import DashboardContent from "../AllContent/DashboardContent/DashboardContent.js";
import Popup from "../Popups/Popup.js";

import "./DashBoard.css";

function DashBoard() {
  const [popToggle, setPopToggle] = useState();

  const popupHandler = () => {
    setPopToggle(null);
  };

  const addTransactionbtnValue = () => {
    setPopToggle(true);
  };

  return (
    <>
      {popToggle && <Popup onPopupHandler={popupHandler} />}
      <div className="home-container">
        <MenuBar />
        <div className="menubar-content-container">
          <DashboardNav addTransactionbtn={addTransactionbtnValue} />
          <DashboardContent />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
