import DashboardNav from "../AllNavs/DashboardNav/DashboardNav.js";
import MenuBar from "../MenuBar/MenuBar";
import DashboardContent from "../AllContent/DashboardContent/DashboardContent.js";

import "./DashBoard.css";

function DashBoard() {
  return (
    <div className="home-container">
      <MenuBar />
      <div className="menubar-content-container">
        <DashboardNav />
        <DashboardContent />
      </div>
    </div>
  );
}

export default DashBoard;
