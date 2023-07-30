import NavCard from "../NavCard";
import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";

import "./ProfileNav.css";

function ProfileNav(props) {
  const { addTransactionBtnHandler } = props;

  const addTransactionBtn = () => {
    addTransactionBtnHandler();
  };

  return (
    <NavCard>
      <div className="dash-heading-container">
        <h1 className="nav-heading">Profile</h1>
        <AddTransactionButton addTransaction={addTransactionBtn} />
      </div>
    </NavCard>
  );
}

export default ProfileNav;
