import { useState } from "react";

import MenuBar from "../MenuBar/MenuBar";
import TransactionNav from "../AllNavs/TransactionNav/TransactionNav";
import TranscactionContent from "../AllContent/TranscactionContent/TranscactionContent";

import Popup from "../Popups/Popup";

import "./Transactions.css";

function Transactions() {
  const [popUpToggle, setPopUpToggle] = useState();

  const popupHandler = () => {
    setPopUpToggle(null);
  };

  const addTransactionbtnHandlerV = () => {
    setPopUpToggle(true);
  };

  return (
    <>
      {popUpToggle && <Popup onPopupHandler={popupHandler} />}
      <div className="home-container">
        <MenuBar />
        <div className="menubar-content-container">
          <TransactionNav
            addTransactionbtnHandler={addTransactionbtnHandlerV}
          />
          <TranscactionContent />
        </div>
      </div>
    </>
  );
}

export default Transactions;
