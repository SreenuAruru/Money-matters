import { useState } from "react";

import Popup from "../Popups/Popup";

import ProfileNav from "../AllNavs/ProfileNav/ProfileNav";
import ProfileContent from "../AllContent/ProfileContent/ProfileContent";
import MenuBar from "../MenuBar/MenuBar";

import "./Profile.css";

function Profile() {
  const [popToggle, setPopToggle] = useState();

  const popupHandler = () => {
    setPopToggle(null);
  };

  const addTransactionBtnHandlerV = () => {
    setPopToggle(true);
  };

  return (
    <>
      {popToggle && <Popup onPopupHandler={popupHandler} />}
      <div className="home-container">
        <MenuBar />
        <div className="menubar-content-container">
          <ProfileNav addTransactionBtnHandler={addTransactionBtnHandlerV} />
          <ProfileContent />
        </div>
      </div>
    </>
  );
}

export default Profile;
