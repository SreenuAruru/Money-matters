import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";
import NavCard from "../NavCard";

import "./DashboardNav.css";

function DashboardNav(props) {
  const { addTransactionbtn } = props;

  const addTransactionb = () => {
    addTransactionbtn();
  };

  return (
    <NavCard>
      <div className="dash-heading-container">
        <h1 className="nav-heading">Accounts</h1>
        <AddTransactionButton addTransaction={addTransactionb} />
      </div>
    </NavCard>
  );
}

export default DashboardNav;
