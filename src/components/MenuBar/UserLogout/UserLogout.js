import { LuLogOut } from "react-icons/lu";

import "./UserLogout.css";

const profileImage =
  "https://s3-alpha-sig.figma.com/img/44a7/6820/ebfeb685ad35aeed987e25b0b1da6864?Expires=1691366400&Signature=kOznqJBeMoRyyDU3uh4Fkk93XvKE8b1Qy86ebZH2bUAiMmQyz~W64UPJH-rNU412860BHSMpTBHHwRIjsWioS3J2GSpoT~N4fEkmHEko4UYk~iuL52yhdNZNP9FVhdYAgyqwbuF5hqofMic3eu96smAWXLYgz3HGmmvsowMVWnVQ1dbY14-RkX9Xxz76LXUXFrFjuaBbUDCqgNRwjM7oTpkcOXa-~QjVokaA3l8QZawK5GRUZ0wZMbt6nhQLjBacWUAVYhBTBTi0tGLfP1owUbmV42JDlSFKbikXGYgBNADS40omOK1fw7tTjdkM71KFkL~gbchnWP~27BORNKjDHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

function UserLogout(props) {
  const { logoutHalnderbutton } = props;
  const logoutHalnder = () => {
    logoutHalnderbutton();
  };
  return (
    <div className="user-logout-container">
      <img className="profile-image" src={profileImage} />
      <div className="logout-name-para-container">
        <div className="logout-name-container">
          <h3 className="profile-name">Rhye</h3>
          <button className="logout-buuton" onClick={logoutHalnder}>
            <LuLogOut className="profile-logout-icon" />
          </button>
        </div>
        <p className="email-id-text">sreenuaruru@gmail.com</p>
      </div>
    </div>
  );
}

export default UserLogout;
