import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";
import NavCard from "../NavCard";

import "./DashboardNav.css";

function DashboardNav() {
  return (
    <NavCard>
      <h1 className="nav-heading">Accounts</h1>
      <AddTransactionButton />
    </NavCard>
  );
}

export default DashboardNav;
